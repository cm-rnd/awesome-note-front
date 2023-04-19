import { useParams } from "react-router-dom";
import { BottomNoteContainer } from "../StyleComponent/NoteStyle";

import { useQuery } from "react-query";
import { NotesPage } from "@/interfaces/CommonInterface";
import { requestNoteData } from "@/apis/Api";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import PageContainer from "../Layout/PageContainer";
import DashboardCard from "../Board/DashBoardCard";
import { Typography } from "@mui/material";

import Paging from "../Layout/Paging";

export function ViewAllNotes() {
  const [page, setPage] = useState(1);
  const size = 5;
  const { data: noteData } = useQuery<NotesPage>(
    [`noteInfo`, page],
    () => requestNoteData(page, size),
    {
      refetchOnMount: true,
    },
  );

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const number = noteData?.totalElements ?? 0;
  return (
    <BottomNoteContainer>
      <PageContainer title="All Notes" description="This is Allnote Page">
        {noteData?.content.map((note) => {
          return (
            <Link to={`/${note.noteId}`} key={note.noteId}>
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
