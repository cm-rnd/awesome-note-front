import { atom } from "recoil";

interface NoteState {
  [key: string]: string[];
}
export const noteState = atom<NoteState>({
  key: "note",
  default: {
    "CM1-1": ["a", "b"],
    "CM1-2": ["c", "d", "e"],
    "CM1-3": ["f"],
  },
});
