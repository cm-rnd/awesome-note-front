import { CommentsPage } from "@/components/Note/CommentsPage";
import { DetailMiddleNote } from "@/components/Note/DetailMiddleNote";
import { TextPage } from "@/components/Note/TextPage";

import {
  CommentsContainer,
  TextContainer,
} from "@/components/StyleComponent/NoteStyle";
import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";

function NotePage() {
  return (
    <div>
      <DetailMiddleNote />
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
