import { requestNoteData } from "@/apis/Api";
import { useQuery } from "react-query";
import { atom, selector } from "recoil";

interface NoteState {
  [key: string]: INote[];
}

export interface INote {
  noteId: number;
  writerNickname: string;
  context: string;
  folderName: string | null;
  folderId: number | null;
}

export const noteState = atom<NoteState>({
  key: "note",
  default: {
    전체노트: [
      {
        noteId: 2,
        writerNickname: "성훈",
        context: "안녕",
        folderName: null,
        folderId: null,
      },
      {
        noteId: 1,
        writerNickname: "성훈",
        context: "안녕하세요",
        folderName: null,
        folderId: null,
      },
    ],
    CM1: [
      {
        noteId: 12,
        writerNickname: "성훈",
        context: "삼성",
        folderName: null,
        folderId: null,
      },
      {
        noteId: 3,
        writerNickname: "성훈",
        context: "엘지",
        folderName: null,
        folderId: null,
      },
    ],
    CM2: [
      {
        noteId: 7,
        writerNickname: "성훈",
        context: "테스트",
        folderName: null,
        folderId: null,
      },
      {
        noteId: 9,
        writerNickname: "성훈",
        context: "합니다",
        folderName: null,
        folderId: null,
      },
    ],
  },
});
