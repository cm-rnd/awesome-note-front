import {
  CommentsContainer,
  TextContainer,
} from "@/components/StyleComponent/NoteStyle";
import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import { MiddleNote, TopNote } from "./Note";

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
