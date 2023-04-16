import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DragabbleCard";
import { noteState } from "@/atoms/atoms";
import Note from "@/pages/Home/Switch/Note";
import { useRecoilState, useSetRecoilState } from "recoil";
import Paging from "../Layout/Paging";
import { INote } from "@/interfaces/CommonInterface";
import { Dispatch, SetStateAction, useState } from "react";

interface IboardProps {
  notes: INote[];
  boardId: string;
  title: string;
}

interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}

const Wrapper = styled.div`
  width: 300px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Notes = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0.2rem 0.4rem 4rem 1rem;
  width: 100%;
  height: 20rem;
  max-height: calc(100vh - 11rem);
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.6rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollBarColor};
    border-radius: 0.3rem;
    background-clip: padding-box;
    border: 0.2rem solid transparent;
    transition: background-color 0.3s;
  }
`;

const Title = styled.div`
  display: block;
  font-size: 1.6rem;
  font-weight: 600;
  width: 16rem;
  height: 4.5rem;
  padding: 1.25rem;
  border-radius: 0.8rem 0.8rem 0 0;
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s, opacity 0.3s;
  user-select: none;
  color: #6d429c;
  & > h2 {
    width: 13.5rem;
    margin-top: 0.2rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    transition: width 0.3s;
  }
  &.background {
    background-color: ${(props) => props.theme.glassColor};
    backdrop-filter: blur(0.4rem);
    box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
  }
`;

const Area = styled.div<IAreaProps>`
  color: black;
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#dfe6e9"
      : props.isDraggingFromThis
      ? "b2bec3"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`;

function Board({ notes, boardId, title }: IboardProps) {
  const setNote = useSetRecoilState(noteState);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const onValid = () => {
    const newNote = {};
  };
  const onScroll = (event: React.UIEvent<HTMLUListElement>) => {
    if (event.currentTarget.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (
      event.currentTarget.scrollHeight - event.currentTarget.scrollTop ===
      event.currentTarget.clientHeight
    ) {
      setIsEnd(true);
    } else {
      setIsEnd(false);
    }
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Droppable droppableId={boardId}>
        {(magic, info) => (
          <Area
            isDraggingOver={info.isDraggingOver}
            isDraggingFromThis={Boolean(info.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            <Notes
              ref={magic.innerRef}
              {...magic.droppableProps}
              onScroll={onScroll}
            >
              {notes.map((note, index) => (
                <DraggableCard
                  key={note.noteId}
                  index={index}
                  noteId={note.noteId}
                  context={`제목: ${note.noteId} 작성자: ${note.writerNickname} 팀: ${note.folderName}`}
                />
              ))}

              {magic.placeholder}
            </Notes>
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}
export default Board;
