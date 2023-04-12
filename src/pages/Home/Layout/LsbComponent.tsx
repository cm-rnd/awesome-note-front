import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUpload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { axiosTeams, postFiles } from "@/apis/Api";
import axios from "axios";
import React, { useRef } from "react";

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

const isLoading = false;

function LsbComponent() {
  const { mutate } = useMutation(postFiles);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <Items>
        <Item>
          <button onClick={handleButtonClick}>
            파일 업로드
            <FontAwesomeIcon onClick={handleButtonClick} icon={faCloudUpload} />
          </button>{" "}
          <input
            type="file"
            ref={fileInputRef}
            onChange={mutate}
            style={{ display: "none" }}
          />
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

function TeamNote() {
  const { isLoading, data } = useQuery<Data>(["teamInfo"], axiosTeams);

  return (
    <TeamContainer>
      <Title>TeamNote</Title>
      <Items>
        {data?.data.folderInfoList.map((team) => (
          <Item key={team.folderId}>
            <Link to={`/${team.folderId}`} state={team}>
              {team.folderName}
            </Link>
          </Item>
        ))}
      </Items>
    </TeamContainer>
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
