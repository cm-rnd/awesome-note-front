import { requestNoteFolderData } from "@/apis/Api";
import {
  folderIdState,
  folderPageState,
  teamFolderIdState,
  teamNotesInfoState,
} from "@/atoms/atoms";
import { notesInfoState } from "@/atoms/atoms";
import { noteState, pageState } from "@/atoms/atoms";
import { NotesPage } from "@/interfaces/CommonInterface";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useResetRecoilState } from "recoil";

export function TeamNotes(
  folderPage: number,
  setFolderPage: (num: number) => void,
  folderId: number,
) {
  const [notes, setNotes] = useRecoilState(noteState);

  const { data: teamNoteData, isFetched } = useQuery<NotesPage>(
    ["noteFolderInfo", folderId, folderPage],
    () => requestNoteFolderData(folderId, folderPage),
  );

  const [notesInfoData, setNotesInfoData] = useRecoilState(teamNotesInfoState);

  useEffect(() => {
    if (teamNoteData) {
      setNotesInfoData(teamNoteData);
    }
    const boardIndex = Object.keys(notes).map((title, index) => {
      return index;
    });
    console.log(boardIndex, "보드인덱스");
    const boardName = Object.keys(notes);
    const numElement = teamNoteData?.numberOfElements ?? 0;

    setNotes((allBoards) => {
      let notes = { ...allBoards };
      console.log(boardName, "보드네임");
      notes[boardName[folderId]] = [];
      return notes;
    });
    console.log(notes, "뭐야");
    for (let j = 0; j < numElement; j++) {
      setNotes((allBoards) => {
        let notes = { ...allBoards };

        const allnote = [...allBoards[boardName[folderId]]];
        const noteObj = teamNoteData?.content[j];

        if (noteObj) {
          allnote.splice(allnote.length, 0, noteObj);
          notes[boardName[folderId]] = allnote;
        }
        console.log(notes, "그다음에는");
        return notes;
      });
    }
  }, [isFetched, folderPage]);
}
