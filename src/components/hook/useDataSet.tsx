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
    data?.data.folderInfoList.map((team) => {
      setNotes((allBoards) => {
        return { ...allBoards, [team.folderName]: [] };
      });
    });
  }, [isFetched]);
};

export default useDataSet;
