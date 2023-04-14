import React, { useEffect, useState } from "react";
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
  pageState,
  teamNotesInfoState,
} from "@/atoms/atoms";
import Board from "../Board";
import axios, { all } from "axios";
import {
  axiosTeams,
  postMoveNote,
  requestNoteData,
  requestNoteFolderData,
} from "@/apis/Api";
import { useMutation, useQuery } from "react-query";

import { Icon } from "@fortawesome/fontawesome-svg-core";
import Paging from "../Paging";
import { AllNotes } from "../Board/AllNotes";
import { Data, NotesPage } from "@/interfaces/CommonInterface";
import usePagination from "../hook/usePagination";
import { TeamNotes } from "../Board/TeamNotes";

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
  const [noteData, setNoteData] = useRecoilState(notesInfoState);

  const { page, setPage, handlePageChange } = usePagination(
    Object.keys(notes).length,
  );
  AllNotes(page[0], (num: number) => handlePageChange(0, num));

  for (let i = 1; i < Object.keys(notes).length; i++) {
    TeamNotes(page[i], (num: number) => handlePageChange(i, num), i);
  }
  const { data } = useQuery<Data>(["teamInfo"], axiosTeams);

  const moveNote = useMutation(() => postMoveNote(noteId, folderId));

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
      // moveNote.mutate();
    }
  };

  console.log(noteData, "노트..");

  useEffect(() => {
    if (folderId !== 0) {
      moveNote.mutate();
    }
  }, [folderId]);

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

/*

  const saveNote = () => {
    noteData();

    const saveData: any = data?.data.folderInfoList.reduce((prev, acc) => {
      return { ...prev, [acc.folderName]: [] };
    }, {}); // setNotes(saveData)

    setNotes({ ...notes, ...saveData });

    const keys = Object.keys(notes);

    console.log("키길이", keys.length);

    const saveTest: any = notesPage?.content.reduce((prev: any, noteInfo) => {
      return { ...prev, ["전체노트"]: [noteInfo] };
    }, {});

    const saveNote: any = notesPage?.content.reduce((prev: any, noteInfo) => {
      for (let i = 0; i < keys.length; i++) {
        if (noteInfo.folderName === keys[i]) {
          return { ...prev, [noteInfo.folderName]: [noteInfo] };
        }
        if (noteInfo.folderName === null) {
          return { ...prev, ["전체노트"]: [noteInfo] };
        }
      }
    }, {});
    console.log("테스트노트", saveTest);
    console.log("세이브노트", saveNote);
 
      notesPage?.content.map((noteInfo) => {
        if (noteInfo.folderName === keys[i]) {
          setNotes({ ...notes, [keys[i]]: [noteInfo] });
        }

        if (noteInfo.folderName === null) {
          console.log("노트뭘까", notes);
          setNotes({
            ...notes,
            ["전체노트"]: [noteInfo],
          });
        }
      });
    }
*/
