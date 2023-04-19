import { userInfoState } from "@/atoms/atoms";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean; isMine: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;

  background-color: ${(props) =>
    props.isDragging
      ? "#e4f2ff"
      : props.isMine
      ? "#c7e5f5ab"
      : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`;

interface IDragabbleCardProps {
  noteId: number;
  writerId?: number;
  context: string;
  index: number;
}

function DragabbleCard({
  noteId,
  context,
  index,
  writerId,
}: IDragabbleCardProps) {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  return (
    <Draggable draggableId={noteId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          isMine={userInfo.id === writerId}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {context}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
