import styled from "styled-components";

export const TopNoteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 65.6px;
  right: 0;
  width: 85%;
  bottom: 10;
  background-color: #b1b4bc;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

export const MiddleNoteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 120.2px;
  border-top: 1px solid #202020;
  right: 0;
  width: 85%;
  bottom: 10;
  background-color: #b1b4bc;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

export const BottomNoteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 84%;
  top: 170.2px;
  border-top: 1px solid #202020;
  right: 0;
  width: 85%;
  bottom: 10;
  background-color: #b1b4bc;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

export const CommentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  border-left: 2px solid #202020;
  width: 100%;
  height: 84%;
  top: 170.2px;
  border-top: 1px solid #202020;
  left: 57.5%;
  width: 85%;
  bottom: 10;
  background-color: #b1b4bc;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 84%;
  top: 170.2px;
  border-top: 1px solid #202020;

  right: 0;
  width: 85%;
  bottom: 10;
  background-color: #b1b4bc;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

export const NoteColumn = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const NoteItems = styled.ul`
  display: flex;
  align-items: center;
`;

export const NoteItem = styled.li`
  font-size: 20px;
  margin-right: 20px;
`;

export const NoteTitle = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
export const RefNoteTitle = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const RefNoteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 84%;
  top: 170.2px;
  border-top: 1px solid #202020;
  text-align: center;
`;

export const RefNoteItems = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin: 100px;
`;

export const RefNoteItem = styled.li`
  font-size: 20px;
  margin-right: 20px;
  justify-content: space-between;
`;
