import { requestNoteFolderData } from "@/apis/Api";
import { NotesPage } from "@/interfaces/CommonInterface";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { BottomNoteContainer } from "../StyleComponent/NoteStyle";
import PageContainer from "../PageContainer";
import DashboardCard from "../DashBoardCard";
import { Typography } from "@mui/material";
import Paging from "../Paging";
import { useParams } from "react-router";

export function ViewTeamNotes() {
  const { teamId } = useParams();
  console.log(teamId);
  const [page, setPage] = useState(1);
  const size = 5;

  const folderId = teamId ?? 1;
  const { data: teamNotesData, isFetched } = useQuery<NotesPage>(
    ["noteFolderInfo", folderId, page, size],
    () => requestNoteFolderData(+folderId, page, size),
  );

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const [teamNotes, setTeamNotes] = useState<NotesPage>();

  useEffect(() => {
    setTeamNotes(teamNotesData);
    console.log(teamNotes);
  }, []);
  const number = teamNotesData?.totalElements ?? 0;
  return (
    <BottomNoteContainer>
      <PageContainer title="Team Notes" description="This is sample page">
        {teamNotesData?.content.map((note) => {
          return (
            <DashboardCard id={note.noteId} title={note.noteId}>
              <Typography>{note.content}</Typography>
            </DashboardCard>
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

export default ViewTeamNotes;
