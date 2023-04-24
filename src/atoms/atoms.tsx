import {
  Data,
  INote,
  IUserInfo,
  NotesPage,
} from "@/interfaces/CommonInterface";
import { atom } from "recoil";

interface NoteState {
  [key: string]: INote[];
}
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

export const teamData = atom<Data>({
  key: "teamData",
  default: { data: { folderInfoList: [] } },
});

export const userInfoState = atom<IUserInfo>({
  key: "userInfo",
  default: { id: 0, loginId: "", nickname: "", role: "" },
});

export const noteIdState = atom({
  key: "noteId",
  default: 0,
});

export const folderIdState = atom({
  key: "folderId",
  default: 0,
});
