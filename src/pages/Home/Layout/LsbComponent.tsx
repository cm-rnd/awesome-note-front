import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { fetchTeams } from "src/apis/Api";
import { dummyData } from "src/apis/DummyData";

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

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-right: 10px;
  padding: 20px;
  font-size: 25px;
`;

interface InterfaceTeam {
  id: string;
  name: string;
}

const isLoading = false;

function TeamNote() {
  /* const { isLoading, data } = useMutation<InterfaceTeam>(["teamInfo"], fetchTeams);
   */

  return (
    <TeamContainer>
      <Title>TeamNote</Title>
      <Items>
        {dummyData?.map((team: any) => (
          <Item key={team.id}>
            <Link to={`/${team.id}`} state={team}>
              {team.name}
            </Link>
          </Item>
        ))}
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
