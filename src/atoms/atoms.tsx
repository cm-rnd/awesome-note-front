import { useQuery } from "react-query";
import { atom, selector } from "recoil";

interface NoteState {
  [key: string]: INote[];
}

export interface INote {
  noteId: number;
  writerNickname: string;
  content: string;
  folderName: string | null;
  folderId: number | null;
}

export const noteState = atom<NoteState>({
  key: "note",
  default: {
    전체노트: [],
    "CM1-1": [],
    "CM1-2": [],
  },
});
