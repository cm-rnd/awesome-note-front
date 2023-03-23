import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  background-color: #74767e64;
  position: fixed;
  top: 70px;
  bottom: 0;
  left: 0;
  color: #202020;
  height: 100%;
  width: 15%;
  z-index: -100;
  border-right: 4px solid #202020;
  text-align: center;
  flex-direction: column;
`;

const TeamContainer = styled.div``;

const Title = styled.div`
  font-size: 30px;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding: 20px;
  font-size: 25px;
`;

function TeamNote() {
  return (
    <TeamContainer>
      <Title>TeamNote</Title>
      <Items>
        <Item>CM 1-1</Item>
        <Item>CM 1-2</Item>
      </Items>
    </TeamContainer>
  );
}

function LsbComponent() {
  return (
    <Container>
      <Items>
        <Item>
          <FontAwesomeIcon icon={faCloudUpload} />{" "}
        </Item>
        <Link to={`/`}>
          <Item> 전체 노트</Item>
        </Link>
        <Item> </Item>
        <Item> </Item>
        <Item> </Item>
        <Item> </Item>
        <Item> </Item>
        <Item> </Item>
        <TeamNote />
      </Items>
    </Container>
  );
}

export default LsbComponent;

/*
- UploadFile
- LinkRow
    - RetouchName
    - DeleteFolder */

/*
- TeamNote
    - AddFolder
    - LinkRow
        - NameRetouch
        - DeleteFolder
*/
