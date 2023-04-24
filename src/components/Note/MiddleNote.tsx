import {
  MiddleNoteContainer,
  NoteTitle,
} from "@/components/StyleComponent/NoteStyle";
import { useQuery } from "react-query";
import { Data } from "@/interfaces/CommonInterface";
import { axiosTeams } from "@/apis/Api";
import { useParams } from "react-router";

export function MiddleNote() {
  const { teamId } = useParams();
  const { data } = useQuery<Data>(["teamInfo"], axiosTeams);
  const i = teamId ?? 0;
  return (
    <MiddleNoteContainer>
      <NoteTitle> {data?.data.folderInfoList[+i - 1].folderName}</NoteTitle>
    </MiddleNoteContainer>
  );
}
