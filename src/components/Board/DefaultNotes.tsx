import { noteState } from "@/atoms/atoms";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";

import { requestNoteData } from "@/apis/Api";
import { useEffect } from "react";
import { Data, NotesPage } from "@/interfaces/CommonInterface";
import { useOutletContext } from "react-router";
const SIZE = 40;

export function DefaultNotes(page: number) {
  const [notes, setNotes] = useRecoilState(noteState);

  const data = useOutletContext<Data>();
  const { data: noteData, isFetched } = useQuery<NotesPage>(
    [`noteInfo`, page, SIZE],
    () => requestNoteData(page, SIZE),
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

      for (
        let j = 1;
        j < +Object.keys(data.data.folderInfoList).length + 1;
        j++
      ) {
        if (
          noteData.content[i].folderName ===
          data.data.folderInfoList[j - 1].folderName
        ) {
          console.log(data, "폴더인포리스트");
          setNotes((allBoards) => {
            let notes = { ...allBoards };
            const allnote = [...allBoards[boardName[j]]];
            const noteObj = noteData?.content[i];

            if (noteObj) {
              allnote.splice(allnote.length, 0, noteObj);
              notes[boardName[j]] = allnote;
            }

            return notes;
          });
        }
      }
    }
  }, [isFetched, page]);
}
