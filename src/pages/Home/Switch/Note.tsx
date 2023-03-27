import styled from "styled-components";

const TopNoteContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 65.6px;
  right: 0;
  width: 85%;
  bottom: 10;
  background-color: #b3a4a4;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

const MiddleNoteContainer = styled.div`
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
  background-color: #b3a4a4;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

const BottomNoteContainer = styled.div`
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
  background-color: #b3a4a4;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

export function TopNote() {
  return <TopNoteContainer>I'm TopNote</TopNoteContainer>;
}

export function MiddleNote() {
  return <MiddleNoteContainer>I'm MiddleNote</MiddleNoteContainer>;
}

export function BottomNote() {
  return <BottomNoteContainer>I'm BottomNote</BottomNoteContainer>;
}

function Note() {
  return (
    <div>
      <TopNote />
      <MiddleNote />
      <BottomNote />
    </div>
  );
}

export default Note;
/*


- TopNote
    - TransferNote
    - DeleteNote
- MiddleNote
    
       FolderName
    
    - SortNote
        - SortName
        - SortDate
- BottomNote
    - -ViewNote
    - -MoveBar
*/
