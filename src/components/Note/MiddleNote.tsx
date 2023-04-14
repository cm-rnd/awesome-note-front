import {
  MiddleNoteContainer,
  NoteTitle,
} from "@/components/StyleComponent/NoteStyle";
import useDataSet from "../hook/useDataSet";

export function MiddleNote() {
  return (
    <MiddleNoteContainer>
      <NoteTitle>전체노트</NoteTitle>
    </MiddleNoteContainer>
  );
}
