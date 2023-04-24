import React, { useEffect } from "react";
import { HomeNoteContainer } from "@/components/StyleComponent/NoteStyle";
import { useRecoilState } from "recoil";

import styled from "styled-components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { folderIdState, noteIdState, noteState } from "@/atoms/atoms";
import Board from "../Board/Board";

import { postMoveNote } from "@/apis/Api";
import { useMutation } from "react-query";

import { Data } from "@/interfaces/CommonInterface";
import usePagination from "../hook/usePagination";
import { TeamNotes } from "../Board/TeamNotes";

import { DefaultNotes } from "../Board/DefaultNotes";
import { useOutletContext } from "react-router";

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

export function BottomNote() {
  const [notes, setNotes] = useRecoilState(noteState);
  const [noteId, setNoteId] = useRecoilState(noteIdState);
  const [folderId, setFolderId] = useRecoilState(folderIdState);
  const { page } = usePagination(Object.keys(notes).length);

  const moveNote = useMutation(() => postMoveNote(noteId, folderId));
  const data = useOutletContext<Data>();
  useEffect(() => {
    data?.data.folderInfoList.map((team) => {
      setNotes((allBoards) => {
        return { ...allBoards, [team.folderName]: [] };
      });
    });
  }, [data.data.folderInfoList]);

  DefaultNotes(page[0]);

  const onDragEnd = (info: DropResult) => {
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
    <HomeNoteContainer>
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
    </HomeNoteContainer>
  );
}
