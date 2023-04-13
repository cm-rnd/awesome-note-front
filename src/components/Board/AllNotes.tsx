import { noteState, pageState } from "@/atoms/atoms";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";

import { requestNoteData } from "@/apis/Api";
import { useEffect } from "react";
import { NotesPage } from "@/interfaces/\bCommonInterface";

export function AllNotes() {
  const [notes, setNotes] = useRecoilState(noteState);
  const [page, setPage] = useRecoilState(pageState);

  const {
    data: noteData,
    isFetched,
    refetch,
  } = useQuery<NotesPage>([`noteInfo`, page], () => requestNoteData(page), {
    refetchOnMount: true,
  });

  useEffect(() => {
    setNotes({ 전체노트: [], "CM1-1": [], "CM1-2": [] });

    const boardTitle = Object.keys(notes);
    const boardIndex = Object.keys(notes).map((title, index) => {
      return index;
    });
    const boardName = Object.keys(notes);
    const numElement = noteData?.numberOfElements ?? 0;
    for (let i = 0; i < numElement; i++) {
      setNotes((allBoards) => {
        let notes = { ...allBoards };

        const allnote = [...allBoards[boardName[0]]];
        const noteObj = noteData?.content[i];

        if (noteObj) {
          allnote.splice(allnote.length, 0, noteObj);
          notes[boardName[0]] = allnote;
        }

        return notes;
      });
    }
  }, [isFetched, page]);
}
