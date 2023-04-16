import {
  INote,
  IPaginationState,
  NotesPage,
} from "@/interfaces/CommonInterface";
import { useQuery } from "react-query";
import { atom, selector } from "recoil";

export interface NoteState {
  [key: string]: INote[];
}

export const pageState = atom({
  key: "page",
  default: 1,
});

export const noteState = atom<NoteState>({
  key: "note",
  default: {
    미분류: [],
  },
});

export const allNoteInfoState = atom<NotesPage>({
  key: "allnoteinfo",
  default: { totalElements: "", content: [], size: 0, numberOfElements: 0 },
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

interface IUserInfo {
  id: number;
  loginId: string;
  nickname: string;
  role: string;
}

export const userInfoState = atom<IUserInfo>({
  key: "userInfo",
  default: { id: 0, loginId: "", nickname: "", role: "" },
});
