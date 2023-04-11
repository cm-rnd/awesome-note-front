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
  default: {},
});
