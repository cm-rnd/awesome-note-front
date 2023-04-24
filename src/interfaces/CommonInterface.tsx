import { Dispatch, SetStateAction } from "react";

export interface NotesPage {
  totalElements: string;
  content: INote[];
  size: number;
  numberOfElements: number;
}

export interface NotesData {
  data: NotesPage;
}
export interface IComment {
  commentId: number;
  content: string;
  createdAt: string;
  writer: boolean;
  writerId: number;
  writerNickname: string;
}
export interface INote {
  noteId: number;
  writerNickname: string;
  writerId?: number;
  content: string;
  folderName: string | null;
  folderId: number | null;
}
export interface Team {
  folderId: string;
  folderName: string;
}

export interface Data {
  data: innerData;
}
export interface innerData {
  folderInfoList: Team[];
}

export interface IPaginationState {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  handlePageChange: (page: number) => void;
}

export interface IUserInfo {
  id: number;
  loginId: string;
  nickname: string;
  role: string;
}

export interface FolderNameForm {
  name: "string";
}

export interface LoginFormData {
  loginId: string;
  password: string;
  extraError?: string;
}

export interface Form {
  errors: {
    email: {
      message: string;
    };
  };
  nickname: string;
  loginId: string;
  password: string;
  passwordCheck: string;
  extraError?: string;
  email: string;
}

export interface ApiForm {
  nickname: string;
  loginId: string;
  password: string;
}

export interface ICommentForm {
  comment: string;
  noteId: string;
}
