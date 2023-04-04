import { CommentsPage } from "@/components/Note/CommentsPage";
import { MiddleNote } from "@/components/Note/MiddleNote";
import { TextPage } from "@/components/Note/TextPage";
import { TopNote } from "@/components/Note/TopNote";
import {
  CommentsContainer,
  TextContainer,
} from "@/components/StyleComponent/NoteStyle";
import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";

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
