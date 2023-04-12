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
        noteId: 1,
        writerNickname: "성훈",
        context: "화나",
        folderName: null,
        folderId: null,
      },
      {
        noteId: 2,
        writerNickname: "성훈",
        context: "test2",
        folderName: null,
        folderId: null,
      },
    ],
    "CM1-1": [
      {
        noteId: 3,
        writerNickname: "성훈",
        context: "머야",
        folderName: "CM1-1",
        folderId: 1,
      },
      {
        noteId: 4,
        writerNickname: "성훈",
        context: "test4",
        folderName: "CM1-2",
        folderId: 1,
      },
    ],
    "CM1-2": [
      {
        noteId: 5,
        writerNickname: "성훈",
        context: "진짜",
        folderName: "CM1-3",
        folderId: 2,
      },
      {
        noteId: 6,
        writerNickname: "성훈",
        context: "te4242",
        folderName: "CM1-3",
        folderId: 2,
      },
    ],
  },
});
