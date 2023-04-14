import {
  INote,
  IPaginationState,
  NotesPage,
} from "@/interfaces/CommonInterface";
import { useQuery } from "react-query";
import { atom, selector } from "recoil";

interface NoteState {
  [key: string]: INote[];
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

export const notesInfoState = atom<NotesPage>({
  key: "notesInfo",
  default: { totalElements: "", content: [], size: 0, numberOfElements: 0 },
});
