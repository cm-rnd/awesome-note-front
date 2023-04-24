import { Typography } from "@mui/material";
import { TextContainer } from "../StyleComponent/NoteStyle";

import PageContainer from "../Layout/PageContainer";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { NotesPage } from "@/interfaces/CommonInterface";
import { requestNoteData } from "@/apis/Api";
import { useEffect } from "react";
import { allNoteInfoState, userInfoState } from "@/atoms/atoms";
import { useRecoilState } from "recoil";
import TextDashboardCard from "../Board/TextDashBoard";

export function TextPage() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const { noteId } = useParams();
  const size = 40;
  const page = 1;
  const { data: noteData } = useQuery<NotesPage>(
    [`noteInfo`, page, size],
    () => requestNoteData(page, size),
    {
      refetchOnMount: true,
    },
  );
  const contentIndex = noteId ?? 0;

  const noteInfo = noteData?.content[+contentIndex];

  // useEffect(() => {}, []);
  const noteTitle = noteInfo?.noteId ?? 0;
  return (
    <TextContainer>
      <PageContainer title="Notes" description=" note">
        <TextDashboardCard>
          <Typography variant="h5">{noteTitle - 1}</Typography>
          <Typography variant="subtitle1">
            작성자:{noteInfo?.writerNickname}
          </Typography>
          <Typography variant="body1">{noteInfo?.content}</Typography>
        </TextDashboardCard>
      </PageContainer>
    </TextContainer>
  );
}
