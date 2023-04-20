import { noteState } from "@/atoms/atoms";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";

import { requestNoteData, requestNoteFolderData } from "@/apis/Api";
import { useEffect } from "react";
import { NotesPage } from "@/interfaces/CommonInterface";

export function DefaultNotes(page: number) {
  const [notes, setNotes] = useRecoilState(noteState);
  const size = 40;
  const { data: noteData, isFetched } = useQuery<NotesPage>(
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
}
