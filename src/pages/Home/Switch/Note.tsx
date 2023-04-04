import {
  BottomNoteContainer,
  MiddleNoteContainer,
  NoteColumn,
  NoteItem,
  NoteItems,
  NoteTitle,
  TopNoteContainer,
} from "@/components/StyleComponent/NoteStyle";
import {
  faShareFromSquare,
  faThumbsDown,
  faThumbsUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export function TopNote() {
  return (
    <TopNoteContainer>
      <NoteColumn>
        <NoteItems>
          <NoteItem>
            <FontAwesomeIcon icon={faShareFromSquare} />
          </NoteItem>
          <NoteItem>
            <FontAwesomeIcon icon={faThumbsUp} />
          </NoteItem>
          <NoteItem>
            <FontAwesomeIcon icon={faThumbsDown} />
          </NoteItem>
          <NoteItem>
            <FontAwesomeIcon icon={faTrash} />
          </NoteItem>
        </NoteItems>
      </NoteColumn>
    </TopNoteContainer>
  );
}

export function MiddleNote() {
  return (
    <MiddleNoteContainer>
      <NoteTitle>전체노트</NoteTitle>
    </MiddleNoteContainer>
  );
}

export function BottomNote() {
  return <BottomNoteContainer>I'm BottomNote</BottomNoteContainer>;
}

function Note() {
  return (
    <div>
      <TopNote />
      <MiddleNote />
      <BottomNote />
      <Outlet />
    </div>
  );
}

export default Note;
/*


- TopNote
    - TransferNote
    - DeleteNote
- MiddleNote
    
       FolderName
    
    - SortNote
        - SortName
        - SortDate
- BottomNote
    - -ViewNote
    - -MoveBar
*/
