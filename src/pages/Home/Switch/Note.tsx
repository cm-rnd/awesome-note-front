import {
  faShareFromSquare,
  faThumbsDown,
  faThumbsUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";
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
  background-color: #b1b4bc;
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
  background-color: #b1b4bc;
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
  background-color: #b1b4bc;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

const Column = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  font-size: 20px;
  margin-right: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export function TopNote() {
  return (
    <TopNoteContainer>
      <Column>
        <Items>
          <Item>
            <FontAwesomeIcon icon={faShareFromSquare} />
          </Item>
          <Item>
            <FontAwesomeIcon icon={faThumbsUp} />
          </Item>
          <Item>
            <FontAwesomeIcon icon={faThumbsDown} />
          </Item>
          <Item>
            <FontAwesomeIcon icon={faTrash} />
          </Item>
        </Items>
      </Column>
    </TopNoteContainer>
  );
}

export function MiddleNote() {
  return (
    <MiddleNoteContainer>
      <Title>전체노트</Title>
    </MiddleNoteContainer>
  );
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
      <Outlet />
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
