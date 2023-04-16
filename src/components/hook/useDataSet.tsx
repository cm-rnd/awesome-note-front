import { axiosTeams } from "@/apis/Api";
import { noteState } from "@/atoms/atoms";
import { Data } from "@/interfaces/CommonInterface";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";

const useDataSet = () => {
  const [notes, setNotes] = useRecoilState(noteState);
  const { data, isFetched } = useQuery<Data>(["teamInfo"], axiosTeams);
  useEffect(() => {
    console.log(data, "팀이름");
    console.log(data?.data.folderInfoList.length, "어떻게생겼지");
    data?.data.folderInfoList.map((team) => {
      setNotes((allBoards) => {
        console.log(allBoards, "올보드");
        return { ...allBoards, [team.folderName]: [] };
      });
    });
    console.log(notes, "여기서는?");
  }, [isFetched]);
};

export default useDataSet;
