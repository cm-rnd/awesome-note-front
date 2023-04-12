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
import { INote, noteState } from "@/atoms/atoms";
import Board from "../Board";
import axios, { all } from "axios";
import { axiosTeams, requestNoteData } from "@/apis/Api";
import { useQuery } from "react-query";
import { Data } from "@/pages/Home/Layout/LsbComponent";
import { Icon } from "@fortawesome/fontawesome-svg-core";

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

export interface NotesPage {
  totalElements: string;
  content: INote[];
  size: number;
}

export interface NotesData {
  data: NotesPage;
}

interface Icontent {
  [key: string]: INote[];
}

export function BottomNote() {
  const [notes, setNotes] = useRecoilState(noteState);
  const { data } = useQuery<Data>(["teamInfo"], axiosTeams);
  const { data: noteData } = useQuery<NotesPage>(["noteInfo"], requestNoteData);

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
    /*
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

  console.log({ notes });
  console.log(noteData?.content, "mnd");
  console.log(noteData?.size, "크기");
  console.log(noteData?.totalElements);
  console.log(noteData?.content[0].writerNickname, "콘데");

  const saveNote = () => {
    const boardTitle = Object.keys(notes);
    const boardIndex = Object.keys(notes).map((title, index) => {
      return index;
    });
    console.log(noteData?.content[0].folderId, "노데");

    for (let i = 0; i < 5; i++) {
      if (noteData?.content[i].folderId === null) {
        setNotes((allBoards) => {
          const allnote = [...allBoards["전체노트"]];
          const noteObj = noteData?.content[i];
          allnote.splice(allnote.length, 0, noteObj);

          return {
            ...allBoards,
            ["전체노트"]: allnote,
          };
        });
      }
    }
  };

  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;
    const boardIndex = Object.keys(notes);
    if (!destination) return;
    if (destination.droppableId === "0") return;
    if (destination?.droppableId === source.droppableId) {
      setNotes((allBoards) => {
        const boardCopy = [...allBoards[boardIndex[+source.droppableId]]];
        const noteObj = boardCopy[source.index];

        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, noteObj);
        return {
          ...allBoards,
          [boardIndex[+source.droppableId]]: boardCopy,
        };
      });
    }

    if (destination?.droppableId !== source.droppableId) {
      setNotes((allBoards) => {
        const sourceBoard = [...allBoards[boardIndex[+source.droppableId]]];
        const destinationBoard = [
          ...allBoards[boardIndex[+destination.droppableId]],
        ];
        const noteObj = sourceBoard[source.index];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, noteObj);
        return {
          ...allBoards,
          [boardIndex[+source.droppableId]]: sourceBoard,
          [boardIndex[+destination.droppableId]]: destinationBoard,
        };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BottomNoteContainer>
        <Wrapper>
          <Boards>
            <button onClick={saveNote}>hi...</button>
            {Object.keys(notes).map((boardId, index) => (
              <Board
                boardId={index + ""}
                title={boardId}
                key={boardId}
                notes={notes[boardId]}
              />
            ))}
          </Boards>
        </Wrapper>
      </BottomNoteContainer>
    </DragDropContext>
  );
}
