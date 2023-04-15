import axios, { Axios, AxiosResponse } from "axios";
import { useMutation } from "react-query";

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

export async function requestNoteData(page: number, size: number) {
  return await axios
    .get(
      `http://localhost:8080/api/v1/notes?page=${page - 1}&size=${size}
    `,
      {
        withCredentials: true,
      },
    )
    .then((res) => {
      const data = res.data.data.noteInfoList;
      console.log(data);
      return data;
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

export async function requestNoteFolderData(
  folderId: number,
  folderPage: number,
  size: number,
) {
  return await axios
    .get(
      `http://localhost:8080/api/v1/notes/folders/${folderId}?page=0&size=${size}`,
      {
        withCredentials: true,
      },
    )
    .then((res) => {
      const data = res.data.data.noteInfoList;
      console.log(data);
      return data;
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

const config = {
  headers: { "Content-Type": "multipart/form-data" },
  withCredentials: true,
};

interface FormData {
  record: File;
}
interface ResponseData {
  record: File;
}

export const postFiles = async (e: any) => {
  // console.log(e.target.files[0]);
  const formdata = e.target.files[0];
  axios
    .post(`http://localhost:8080/api/v1/notes`, { record: formdata }, config)
    .then((data) => {
      console.log(data);
      alert("업로드 완료");
      window.location.reload();
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
      alert("업로드 오류");
    });
};

export async function postMoveNote(noteId: number, folderId: number) {
  return await axios
    .post(
      `http://localhost:8080/api/v1/notes/${noteId}/folders/${folderId}`,
      "",
      { withCredentials: true },
    )
    .then((data) => {
      console.log(data);
      alert("업로드 완료");
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
      alert("업로드 오류");
    });
}

/*
export async function PostFiles(event: any) {
  return await axios
    .post(
      `http://localhost:8080/api/v1/notes`,
      { record: event.target.files[0] },
      {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      },
    )
    .then((data) => {
      console.log(data);
      alert("업로드 완료");
      window.location.reload();
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
      alert("업로드 오류");
    });
}
*/
