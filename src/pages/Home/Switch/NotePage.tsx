import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import { MiddleNote, TopNote } from "./Note";

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 84%;
  top: 170.2px;
  border-top: 1px solid #202020;

  right: 0;
  width: 85%;
  bottom: 10;
  background-color: #b3a4a4;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

const CommentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  border-left: 2px solid #202020;
  width: 100%;
  height: 84%;
  top: 170.2px;
  border-top: 1px solid #202020;
  left: 57.5%;
  width: 85%;
  bottom: 10;
  background-color: #b3a4a4;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

const Column = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  font-size: 20px;
  margin-right: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

function TextPage() {
  const { noteId } = useParams();
  return <TextContainer>i'm textContainer</TextContainer>;
}

function CommentsPage() {
  return <CommentsContainer>I'm Comments container</CommentsContainer>;
}

function NotePage() {
  return (
    <div>
      <TopNote />
      <MiddleNote />
      <TextPage />
      <CommentsPage />
    </div>
  );
}
export default NotePage;

/*

NotePage

- TopNote
    - TransferNote
    - DeleteNote
    - LikeDislike
    - 
- MiddleNote
    - NoteName
- BottomNote
    - NoteText
        - ViewText
        - LikeNumber
    - Comment
        - CommentText
            - DeleteComment
            - Modify
        - InputComment



*/
