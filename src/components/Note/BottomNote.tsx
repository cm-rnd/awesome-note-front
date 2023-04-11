import React from "react";
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
import axios from "axios";
import { axiosTeams, requestNoteData } from "@/apis/Api";
import { useQuery } from "react-query";
import { DATA } from "@/pages/Home/Layout/LsbComponent";

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
  const { isLoading, data } = useQuery<DATA>(["teamInfo"], axiosTeams);
  const saveNote = () => {
    /*const savedata: any = data?.data.folderInfoList.map((team) =>
      setNotes({ [team.folderName]: [] }),
    );*/
    // const saveData = data?.data.folderInfoList.map((team) => {
    //   return setNotes((old) => { [team.folderName]: [], (...old) });
    // });
    const saveData: any = data?.data.folderInfoList.reduce((prev, acc) => {
      return { ...prev, [acc.folderName]: [] };
    }, {});
    // setNotes(saveData)
    setNotes(saveData);
  };

  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      setNotes((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const noteObj = boardCopy[source.index];

        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, noteObj);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy,
        };
      });
    }
    if (destination?.droppableId !== source.droppableId) {
      setNotes((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const destinationBoard = [...allBoards[destination.droppableId]];
        const noteObj = sourceBoard[source.index];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, noteObj);
        return {
          ...allBoards,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BottomNoteContainer>
        <Wrapper>
          <button onClick={saveNote}>save</button>
          <Boards>
            {Object.keys(notes).map((boardId) => (
              <Board boardId={boardId} key={boardId} notes={notes[boardId]} />
            ))}
          </Boards>
        </Wrapper>
      </BottomNoteContainer>
    </DragDropContext>
  );
}
