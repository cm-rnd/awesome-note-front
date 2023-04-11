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
import { noteState } from "@/atoms/atoms";
import Board from "../Board";
import axios from "axios";
import { requestNoteData } from "@/apis/Api";
import { useQuery } from "react-query";

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
  const [notes, setNote] = useRecoilState(noteState);
  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;
    if (!destination) return;
    if (destination?.droppableId === source.droppableId) {
      setNote((allBoards) => {
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
      setNote((allBoards) => {
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
  const { isLoading, data } = useQuery(["noteInfo"], requestNoteData);
  console.log(data);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BottomNoteContainer>
        <Wrapper>
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
