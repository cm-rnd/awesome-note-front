import { useParams } from "react-router-dom";
import {
  NoteItem,
  NoteItems,
  RefNoteContainer,
  RefNoteItem,
  RefNoteItems,
  RefNoteTitle,
  TextContainer,
} from "../StyleComponent/NoteStyle";
import { useRecoilState } from "recoil";
import { noteState } from "@/atoms/atoms";
import { useQuery } from "react-query";
import { NotesPage } from "@/interfaces/CommonInterface";
import { requestNoteData } from "@/apis/Api";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function ViewAllNotes() {
  const { noteId } = useParams();
  const [page, setPage] = useState(1);
  const size = 5;
  const {
    data: noteData,
    isFetched,
    refetch,
  } = useQuery<NotesPage>(
    [`noteInfo`, page],
    () => requestNoteData(page, size),
    {
      refetchOnMount: true,
    },
  );
  const NoteTitle = styled.div`
    font-size: 30px;
  `;
  const [allNotes, setAllNotes] = useState<NotesPage>();

  useEffect(() => {
    setAllNotes(noteData);
    console.log(allNotes);
  }, []);

  return (
    <RefNoteContainer>
      <RefNoteTitle>All Note</RefNoteTitle>
      <RefNoteItems>
        {noteData?.content.map((note) => (
          <RefNoteItem key={note.folderId}>
            <Link to={`/${note.folderId}`} state={note}>
              {note.content}
            </Link>
          </RefNoteItem>
        ))}
      </RefNoteItems>
    </RefNoteContainer>
  );
}
