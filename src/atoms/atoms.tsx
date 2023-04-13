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

export const pageState = atom({
  key: "page",
  default: 1,
});

export const noteState = atom<NoteState>({
  key: "note",
  default: {
    전체노트: [],
    "CM1-1": [],
    "CM1-2": [],
  },
});

export const noteIdState = atom({
  key: "noteId",
  default: 0,
});
export const folderIdState = atom({
  key: "folderId",
  default: 0,
});
