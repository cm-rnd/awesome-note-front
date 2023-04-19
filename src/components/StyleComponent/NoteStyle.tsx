import styled from "styled-components";

export const MiddleNoteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 7.8%;
  border-top: 0.1rem solid #5115152d;
  right: 0;
  width: 100%;
  bottom: 10;
  font-size: 2rem;
  padding: 1.2rem 4rem;
  background-color: #bdcdd6;
  color: #6d429c;
`;

export const BottomNoteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 14rem;
  position: fixed;
  height: 90.4%;
  top: 14.6%;

  border-top: 0.1rem solid #5115152d;
  width: 100%;
  background-color: #bdcdd6;
  font-size: 0.9rem;
  color: white;
`;

export const HomeNoteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 90.4%;
  top: 14.6%;

  border-top: 0.1rem solid #5115152d;
  width: 100%;
  background-color: #bdcdd6;
  font-size: 0.9rem;
  color: white;
`;

export const CommentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  border-left: 2px solid #202020;
  height: 86%;
  top: 14.8%;
  border-top: 1px solid #202020;
  left: 64%;
  width: 36%;
  bottom: 10;
  background-color: #bdcdd6;
  font-size: 2rem;
  padding: 2rem 6rem;
  color: white;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  height: 86%;
  top: 14.8%;
  border-top: 1px solid #202020;
  width: 64%;
  bottom: 10;
  background-color: #bdcdd6;
  font-size: 2rem;
  padding: 2rem 5rem;
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
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  transition: color 0.3s;
`;
export const RefNoteTitle = styled.div`
  font-size: 2rem;
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
  padding: 2rem;
  margin: 100px;
`;

export const RefNoteItem = styled.li`
  font-size: 20px;
  margin-right: 20px;
  justify-content: space-between;
`;
export const ViewContainer = styled.div`
  align-items: center;
  width: 80%;
`;
