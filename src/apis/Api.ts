import axios from "axios";

export async function axiosTeams() {
  return await axios
    .get("http://localhost:8080/api/v1/folders", {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res); // 요청 확인용
      return res.data;
    });
}
