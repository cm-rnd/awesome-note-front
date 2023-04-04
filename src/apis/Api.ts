import axios from "axios";

export async function fetchTeams() {
  return await axios.get("http://localhost:8000/teams").then((res) => {
    console.log(res); // 요청 확인용
    return res.data;
  });
}
