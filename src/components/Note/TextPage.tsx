import { Typography } from "@mui/material";
import {
  BottomNoteContainer,
  NoteItem,
  NoteItems,
  TextContainer,
} from "../StyleComponent/NoteStyle";
import DashboardCard from "../Board/DashBoardCard";
import PageContainer from "../Layout/PageContainer";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { INote, NotesPage } from "@/interfaces/CommonInterface";
import { noteDetailData, requestNoteData } from "@/apis/Api";
import { useEffect, useState } from "react";
import {
  NoteState,
  allNoteInfoState,
  noteState,
  userInfoState,
} from "@/atoms/atoms";
import { useRecoilState } from "recoil";
import TextDashboardCard from "../Upload/TextDashBoard";
import { BottomNote, Wrapper } from "./BottomNote";

export function TextPage() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  /*
  const loginId = userInfo.loginId;
  const id = userInfo.id;
  const nickname = userInfo.nickname;
  const role = userInfo.role;
  console.log(userInfo, "유저인포");
  console.log(userInfo.nickname, "닉네임");
  const {
    data: noteData,
    isFetched,
    refetch,
  } = useQuery<INote>(
    [`noteInfo`, noteIdNumber, id, loginId, nickname, role],
    () => noteDetailData(+noteIdNumber, id, loginId, nickname, role),
  );*/

  const { noteId } = useParams();
  const size = 40;
  const page = 1;
  const {
    data: noteData,
    isFetched,
    refetch,
  } = useQuery<NotesPage>(
    [`noteInfo`, page, size],
    () => requestNoteData(page, size),
    {
      refetchOnMount: true,
    },
  );
  const contentIndex = noteId ?? 0;

  const noteInfo = noteData?.content[+contentIndex];

  console.log(noteData, "뭘까");
  const [notese, setNotes] = useRecoilState(allNoteInfoState);

  useEffect(() => {
    console.log(notese);
  }, []);

  return (
    <TextContainer>
      <PageContainer title="Notes" description=" note">
        <TextDashboardCard>
          <Typography variant="h5">{noteInfo?.noteId}</Typography>
          <Typography variant="subtitle1">
            작성자:{noteInfo?.writerNickname}
          </Typography>
          <Typography variant="body1">{noteInfo?.content}</Typography>
        </TextDashboardCard>
      </PageContainer>
    </TextContainer>
  );
}
