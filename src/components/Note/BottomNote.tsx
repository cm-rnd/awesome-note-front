import React, { useEffect, useLayoutEffect, useState } from "react";
import { BottomNoteContainer } from "@/components/StyleComponent/NoteStyle";
import { useRecoilState } from "recoil";

import styled from "styled-components";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import {
  folderIdState,
  noteIdState,
  noteState,
  notesInfoState,
} from "@/atoms/atoms";
import Board from "../Board";

import { axiosTeams, postMoveNote } from "@/apis/Api";
import { useMutation, useQuery } from "react-query";

import { Data, NotesPage } from "@/interfaces/CommonInterface";
import usePagination from "../hook/usePagination";
import { TeamNotes } from "../Board/TeamNotes";
import useDataSet from "../hook/useDataSet";
import { DefaultNotes } from "../Board/DefaultNotes";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;

function Column() {}
export function BottomNote() {
  const [notes, setNotes] = useRecoilState(noteState);
  const [noteId, setNoteId] = useRecoilState(noteIdState);
  const [folderId, setFolderId] = useRecoilState(folderIdState);
  const [noteData, setNoteData] = useRecoilState(notesInfoState);
  const { page, handlePageChange } = usePagination(Object.keys(notes).length);

  const moveNote = useMutation(() => postMoveNote(noteId, folderId));

  const { data, isFetched } = useQuery<Data>(["teamInfo"], axiosTeams);
  useEffect(() => {
    console.log(data, "팀이름");
    console.log(data?.data.folderInfoList.length, "어떻게생겼지");
    data?.data.folderInfoList.map((team) => {
      setNotes((allBoards) => {
        console.log(allBoards, "올보드");
        return { ...allBoards, [team.folderName]: [] };
      });
    });
    console.log(notes, "여기서는?");
  }, [isFetched]);

  DefaultNotes(page[0], (num: number) => handlePageChange(0, num));
  for (let i = 1; i < 5; i++) {
    TeamNotes(page[i], (num: number) => handlePageChange(i, num), i);
  }

  console.log(notes);

  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;
    const boardName = Object.keys(notes);
    if (!destination) return;
    if (destination.droppableId === "0") return;
    if (destination?.droppableId === source.droppableId) {
      setNotes((allBoards) => {
        const boardCopy = [...allBoards[boardName[+source.droppableId]]];
        const noteObj = boardCopy[source.index];

        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, noteObj);
        return {
          ...allBoards,
          [boardName[+source.droppableId]]: boardCopy,
        };
      });
    }

    if (destination?.droppableId !== source.droppableId) {
      setNotes((allBoards) => {
        const sourceBoard = [...allBoards[boardName[+source.droppableId]]];
        const destinationBoard = [
          ...allBoards[boardName[+destination.droppableId]],
        ];
        const noteObj = sourceBoard[source.index];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, noteObj);
        return {
          ...allBoards,
          [boardName[+source.droppableId]]: sourceBoard,
          [boardName[+destination.droppableId]]: destinationBoard,
        };
      });
      setNoteId(+draggableId);
      setFolderId(+destination.droppableId);
    }
  };

  useEffect(() => {
    if (folderId !== 0) {
      moveNote.mutate();
    }
  }, [noteId || folderId]);

  return (
    <BottomNoteContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(notes).map((boardId, index) => {
              return (
                <Board
                  boardId={index + ""}
                  title={boardId}
                  key={boardId}
                  notes={notes[boardId]}
                />
              );
            })}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </BottomNoteContainer>
  );
}
