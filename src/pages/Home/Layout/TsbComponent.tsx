import { axiosTeams, postFiles } from "@/apis/Api";
import { Data } from "@/interfaces/CommonInterface";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowPointer,
  faCloudUpload,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useMutation, useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

/*

SiteName

- SearchBar
- MyInfo
    - LogOut

*/

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0px;
  background-color: black;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

const Column = styled.div`
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
const Search = styled.span`
  color: white;
  svg {
    height: 25px;
  }
`;

const User = styled.span`
  color: white;
  svg {
    height: 25px;
  }
`;

function TsbComponent() {
  const { isLoading, data } = useQuery<Data>(["teamInfo"], axiosTeams);
  const { mutate } = useMutation(postFiles);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <Nav>
      <Column>
        <Items>
          <Item>
            {" "}
            <Link to={`/`}>Awesome Note</Link>
          </Item>
          <Item>
            <Link to={`/page/allnotes`}>All Notes</Link>
          </Item>

          {data?.data.folderInfoList.map((team) => (
            <Item key={team.folderId}>
              <Link to={`/page/${team.folderId}`} state={team}>
                {team.folderName}
              </Link>
            </Item>
          ))}
        </Items>
      </Column>

      <Column>
        <Item>
          <FontAwesomeIcon
            cursor={faHandPointer as any}
            onClick={handleButtonClick}
            icon={faCloudUpload}
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={mutate}
            style={{ display: "none" }}
          />
        </Item>
        <User>
          <FontAwesomeIcon icon={faUser} />
        </User>
      </Column>
    </Nav>
  );
}

export default TsbComponent;
