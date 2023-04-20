import { requestNoteFolderData } from "@/apis/Api";
import { NotesPage } from "@/interfaces/CommonInterface";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import {
  BottomNoteContainer,
  ViewContainer,
} from "../StyleComponent/NoteStyle";
import PageContainer from "../Layout/PageContainer";
import DashboardCard from "../Board/DashBoardCard";
import { Typography } from "@mui/material";
import Paging from "../Layout/Paging";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export function ViewTeamNotes() {
  const { teamId } = useParams();

  const [page, setPage] = useState(1);
  const size = 5;

  const folderId = teamId ?? 1;
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  const { data: teamNotesData } = useQuery<NotesPage>(
    ["noteFolderInfo", folderId, page, size],
    () => requestNoteFolderData(+folderId, page, size),
  );

  const [teamNotes, setTeamNotes] = useState<NotesPage>();

  useEffect(() => {
    setTeamNotes(teamNotesData);
  }, [page]);

  const number = teamNotesData?.totalElements ?? 0;
  return (
    <BottomNoteContainer>
      <ViewContainer>
        <PageContainer title="Team Notes" description="This is teamnote Page">
          {teamNotesData?.content.map((note) => {
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
      </ViewContainer>
    </BottomNoteContainer>
  );
}

export default ViewTeamNotes;
