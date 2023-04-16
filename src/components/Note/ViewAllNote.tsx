import { useParams } from "react-router-dom";
import {
  BottomNoteContainer,
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
import PageContainer from "../PageContainer";
import DashboardCard from "../Board/DashBoardCard";
import { Pagination, Typography } from "@mui/material";
import { BottomNote } from "./BottomNote";
import Paging from "../Paging";

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

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const [allNotes, setAllNotes] = useState<NotesPage>();

  useEffect(() => {
    setAllNotes(noteData);
    console.log(allNotes);
  }, []);
  const number = noteData?.totalElements ?? 0;
  return (
    <BottomNoteContainer>
      <PageContainer title="All Notes" description="This is sample page">
        {noteData?.content.map((note) => {
          return (
            <Link to={`/${note.noteId}`}>
              <DashboardCard id={note.noteId} title={note.noteId}>
                <Typography>{note.content}</Typography>
              </DashboardCard>
            </Link>
          );
        })}
        <Paging
          page={page}
          totalElement={+number}
          handlePageChange={handlePageChange}
        />
      </PageContainer>
    </BottomNoteContainer>
  );
}
