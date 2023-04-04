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
