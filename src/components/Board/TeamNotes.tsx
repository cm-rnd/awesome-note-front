import { requestNoteFolderData } from "@/apis/Api";

import { noteState } from "@/atoms/atoms";
import { NotesPage } from "@/interfaces/CommonInterface";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useResetRecoilState } from "recoil";

export function TeamNotes(folderPage: number, folderId: number) {
  const [notes, setNotes] = useRecoilState(noteState);

  const size = 40;

  const { data: teamNoteData, isFetched } = useQuery<NotesPage>(
    ["noteFolderInfo", folderId, folderPage, size],
    () => requestNoteFolderData(folderId, folderPage, size),
  );

  useEffect(() => {
    if (isFetched) {
      const boardName = Object.keys(notes);
      const numElement = teamNoteData?.numberOfElements ?? 0;

      for (let j = 0; j < numElement; j++) {
        setNotes((allBoards) => {
          let notes = { ...allBoards };

          const allnote = [...allBoards[boardName[folderId]]];
          const noteObj = teamNoteData?.content[j];

          if (noteObj) {
            allnote.splice(allnote.length, 0, noteObj);
            notes[boardName[folderId]] = allnote;
          }

          return notes;
        });
      }
    }
  }, [isFetched]);
}
