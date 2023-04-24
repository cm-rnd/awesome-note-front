import { userInfoState } from "@/atoms/atoms";
import {
  ApiForm,
  FolderNameForm,
  Form,
  LoginFormData,
} from "@/interfaces/CommonInterface";
import axios from "axios";

import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";

export async function axiosTeams() {
  return await axios
    .get("http://localhost:8080/api/v1/folders", {
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    });
}

export async function axiosUser() {
  return await axios
    .get("http://localhost:8080/api/v1/users/info?", {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res);
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
      `http://localhost:8080/api/v1/notes/folders/${folderId}?page=${
        folderPage - 1
      }&size=${size}`,
      {
        withCredentials: true,
      },
    )
    .then((res) => {
      const data = res.data.data.noteInfoList;
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

export async function noteDetailData(
  noteId: number,
  id: number,
  loginId: string,
  nickname: string,
  role: string,
) {
  return await axios
    .get(
      `http://localhost:8080/api/v1/notes/${noteId}?id=${id}&loginId=${loginId}&nickname=${nickname}&role=${role}`,
      {
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        withCredentials: true,
      },
    )
    .then((res) => {
      const data = res.data;

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

export async function getComments(
  noteId: number,
  id: number,
  loginId: string,
  nickname: string,
  role: string,
) {
  return await axios
    .get(
      `http://localhost:8080/api/v1/notes/${noteId}/comments?id=${id}&loginId=${loginId}&nickname=${nickname}&role=${role}&page=0&size=8`,
      {
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        withCredentials: true,
      },
    )
    .then((res) => {
      const data = res.data.data.content;

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

export const createFolder = async (folderName: FolderNameForm) => {
  const navigate = useNavigate();

  axios
    .post(
      "http://localhost:8080/api/v1/folders",
      {
        name: folderName.name,
      },

      {
        headers: { ContentType: "application/json" },
        withCredentials: true,
      },
    )
    .then((res) => {
      window.alert(`업로드완료`);
      navigate("/page/allnotes");
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
};

export const LoginPost = (data: LoginFormData) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  axios
    .post("http://localhost:8080/api/v1/login", data, {
      withCredentials: true,
    })
    .then((res) => {
      setUserInfo(res.data.data);

      navigate(`/`);
    })
    .catch((error) => {
      window.alert("로그인 실패");
      console.log(error);
      location.reload();
    });
};

export const onPost = (data: Form) => {
  const navigate = useNavigate();
  axios
    .post<ApiForm>("http://localhost:8080/api/v1/signup", data, {
      headers: { ContentType: "application/json" },
    })
    .then((res) => {
      window.alert(`회원가입 완료`);
      navigate(`/login`);
    })
    .catch((error) => {
      window.alert(`회원가입 실패`);
      console.log(error);
    });
};
