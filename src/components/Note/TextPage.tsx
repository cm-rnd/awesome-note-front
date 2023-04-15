import { Typography } from "@mui/material";
import { TextContainer } from "../StyleComponent/NoteStyle";
import DashboardCard from "../DashBoardCard";
import PageContainer from "../PageContainer";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { INote, NotesPage } from "@/interfaces/CommonInterface";
import { noteDetailData } from "@/apis/Api";
import { useEffect, useState } from "react";

export function TextPage() {
  const { noteId } = useParams();
  const note = noteId ?? 0;
  const {
    data: noteData,
    isFetched,
    refetch,
  } = useQuery<INote>([`noteInfo`, note], () => noteDetailData(+note), {
    refetchOnMount: true,
  });

  const [notes, setNotes] = useState<INote>();

  useEffect(() => {
    setNotes(notes);
    console.log(notes);
  }, []);

  return (
    <TextContainer>
      <PageContainer title="Notes" description=" note">
        <DashboardCard>
          <Typography variant="h6">Heading2</Typography>
          <Typography variant="body1">{notes?.content}</Typography>
        </DashboardCard>
      </PageContainer>
    </TextContainer>
  );
}
