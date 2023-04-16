import {
  MiddleNoteContainer,
  NoteTitle,
} from "@/components/StyleComponent/NoteStyle";
import useDataSet from "../hook/useDataSet";
import { useQuery } from "react-query";
import { Data } from "@/interfaces/CommonInterface";
import { axiosTeams } from "@/apis/Api";
import { useEffect } from "react";
import { useParams } from "react-router";

export function MiddleNote() {
  const { teamId } = useParams();
  const { isLoading, data } = useQuery<Data>(["teamInfo"], axiosTeams);

  const i = teamId ?? 0;
  return (
    <MiddleNoteContainer>
      <NoteTitle> {data?.data.folderInfoList[+i - 1].folderName}</NoteTitle>
    </MiddleNoteContainer>
  );
}
