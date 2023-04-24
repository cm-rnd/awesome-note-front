import { requestNoteFolderData } from "@/apis/Api";

import { noteState } from "@/atoms/atoms";
import { NotesPage } from "@/interfaces/CommonInterface";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";

const SIZE = 40;

export function TeamNotes(folderPage: number, folderId: number) {
  const [notes, setNotes] = useRecoilState(noteState);

  const { data: teamNoteData, isFetched } = useQuery<NotesPage>(
    ["noteFolderInfo", folderId, folderPage, SIZE],
    () => requestNoteFolderData(folderId, folderPage, SIZE),
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
