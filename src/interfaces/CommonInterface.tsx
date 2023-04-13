export interface NotesPage {
  totalElements: string;
  content: INote[];
  size: number;
  numberOfElements: number;
}

export interface NotesData {
  data: NotesPage;
}

export interface INote {
  noteId: number;
  writerNickname: string;
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
