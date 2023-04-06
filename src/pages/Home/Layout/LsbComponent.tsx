import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { axiosTeams } from "@/apis/Api";

const Container = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  background-color: #d9dce3;
  position: fixed;
  top: 60px;
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

interface Team {
  id: string;
  name: string;
}

const isLoading = false;

function TeamNote() {
  const { isLoading, data } = useQuery<Team[]>(["teamInfo"], axiosTeams);

  return (
    <TeamContainer>
      <Title>TeamNote</Title>
      <Items>
        {data?.map((team) => (
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
        <Item>
          {" "}
          <Link to={`/`}>전체 노트</Link>
        </Item>

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
