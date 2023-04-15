import { noteState } from "@/atoms/atoms";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";

import { requestNoteData, requestNoteFolderData } from "@/apis/Api";
import { useEffect } from "react";
import { NotesPage } from "@/interfaces/CommonInterface";

export function DefaultNotes(page: number, setPage: (num: number) => void) {
  const [notes, setNotes] = useRecoilState(noteState);
  const size = 40;
  const {
    data: noteData,
    isFetched,
    refetch,
  } = useQuery<NotesPage>(
    [`noteInfo`, page, size],
    () => requestNoteData(page, size),
    {
      refetchOnMount: true,
    },
  );

  useEffect(() => {
    if (!noteData) {
      return;
    }
    const boardTitle = Object.keys(notes);
    const boardIndex = Object.keys(notes).map((title, index) => {
      return index;
    });
    const boardName = Object.keys(notes);
    const numElement = noteData?.numberOfElements ?? 0;

    setNotes((allBoards) => {
      let notes = { ...allBoards };
      notes[boardName[0]] = [];
      return notes;
    });

    for (let i = 0; i < numElement; i++) {
      if (noteData.content[i].folderName === null) {
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
    }
  }, [isFetched, page]);
  /* useEffect(() => {
    if (notes) {
      setPagination(
        Object.keys(notes).map((n: any) => {
          return { page: 1 };
        }),
      );
    }
  }, [isFetched]);
*/
}
