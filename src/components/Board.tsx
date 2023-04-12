import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DraggableCard from "./DragabbleCard";
import { INote, noteState } from "@/atoms/atoms";
import Note from "@/pages/Home/Switch/Note";
import { useRecoilState, useSetRecoilState } from "recoil";
import Paging from "./Paging";

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

const Title = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
`;

interface IboardProps {
  notes: INote[];
  boardId: string;
  title: string;
  page: number;
  setPage: any;
  totalElement: any;
}

interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}

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

function Board({
  notes,
  boardId,
  title,
  page,
  setPage,
  totalElement,
}: IboardProps) {
  const setNote = useSetRecoilState(noteState);
  console.log(boardId);
  const onValid = () => {
    const newNote = {};
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
            {notes.map((note, index) => (
              <DraggableCard
                key={note.noteId}
                index={index}
                noteId={note.noteId}
                context={`제목: ${note.noteId} 작성자: ${note.writerNickname}`}
              />
            ))}

            {magic.placeholder}
          </Area>
        )}
      </Droppable>
      <Paging page={page} setPage={setPage} totalElement={totalElement} />
    </Wrapper>
  );
}
export default Board;
