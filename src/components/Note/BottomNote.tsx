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
import { INote, noteState, pageState } from "@/atoms/atoms";
import Board from "../Board";
import axios, { all } from "axios";
import { axiosTeams, requestNoteData, requestNoteFolderData } from "@/apis/Api";
import { useQuery } from "react-query";
import { Data } from "@/pages/Home/Layout/LsbComponent";
import { Icon } from "@fortawesome/fontawesome-svg-core";
import Paging from "../Paging";

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
  const [page, setPage] = useRecoilState(pageState);

  const { data } = useQuery<Data>(["teamInfo"], axiosTeams);

  const {
    data: noteData,
    isFetched,
    refetch,
  } = useQuery<NotesPage>([`noteInfo`], () => requestNoteData(page), {
    refetchOnMount: true,
  });

  const { data: notefolderData } = useQuery<NotesPage>(["noteFolderInfo"], () =>
    requestNoteFolderData(folderId, folderPage),
  );

  const folderId = 1;
  const folderPage = 1;
  console.log(page, "페이지");
  console.log({ noteData }, "노트데이터");

  useEffect(() => {
    refetch();
  }, [page]);

  useEffect(() => {
    if (isFetched) {
      const boardTitle = Object.keys(notes);
      const boardIndex = Object.keys(notes).map((title, index) => {
        return index;
      });
      const boardName = Object.keys(notes);
      console.log(noteData?.totalElements, "노트 토탈엘리멘트");
      console.log(notefolderData, "노트폴더데이터");

      for (let i = 0; i < 5; i++) {
        if (noteData?.content[i].folderId === null) {
          setNotes((allBoards) => {
            const allnote = [...allBoards[boardName[0]]];
            const noteObj = noteData?.content[i];
            allnote.splice(allnote.length, 0, noteObj);
            return {
              ...allBoards,
              [boardName[0]]: allnote,
            };
          });
        }
      }
      for (let i = 1; i < boardName.length; i++) {
        const folderId = i;
        setNotes((allBoards) => {
          const allnotes = notefolderData?.content ?? [];
          return {
            ...allBoards,
            [boardName[1]]: allnotes,
          };
        });
      }
    }
  }, [isFetched]);

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
    }
  };

  return (
    <BottomNoteContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(notes).map((boardId, index) => (
              <Board
                boardId={index + ""}
                title={boardId}
                key={boardId}
                notes={notes[boardId]}
                page={page}
                setPage={setPage}
                totalElement={noteData?.totalElements}
              />
            ))}
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
