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
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userInfoState } from "@/atoms/atoms";

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
  background-color: #bdcdd6;
  font-size: 2rem;
  padding: 1.2rem 4rem;
  color: #eee9da;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: color 0.3s;
  color: ${(props) => props.theme.secondaryTextColor};
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  transition: color 0.3s;
  padding: 0;
  border-radius: 0.2rem;
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${(props) => props.theme.accentColor};
  }
  &:focus {
    outline: 0.15rem solid ${(props) => props.theme.accentColor};
  }
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
  font-size: 1rem;
  margin-right: 50px;
`;

const FolderInput = styled.input`
  all: unset;
  padding: 1px 1px;
  border-radius: 5px;
  border: 3px solid rgba(5, 5, 5, 0.34);
  background-color: #dddee2;
  margin-bottom: 2px;
  color: rgba(33, 26, 26, 0.858);
  font-size: 15px;
  width: 87%;
  height: 10px;
`;
const FolderButton = styled.button`
  font-size: 9px;
  height: 16px;
  width: 90%;
`;

const FolderForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 10;
  height: 20px;
  margin: 0 auto;
  padding: 0;
  background-color: #0d121ebf;
  border-radius: 5px;
`;
interface FolderNameForm {
  name: "string";
}
function NavComponent() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
  } = useForm<FolderNameForm>();
  const { isLoading, data } = useQuery<Data>(["teamInfo"], axiosTeams);
  const { mutate } = useMutation(postFiles);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const navigate = useNavigate();
  const handleClickLogout = () => {
    axios
      .post(`http://localhost:8080/api/v1/logout`, null, {
        withCredentials: true,
      })
      .then((data) => {
        console.log(data);
        window.alert(`로그아웃`);
        navigate(`/login`);
      });
  };

  const createFolder = async (folderName: FolderNameForm) => {
    const body = {
      user: {
        id: 2,
        loginId: "ta14",
        nickname: "강성훈",
        role: "ADMIN",
      },
      createRequest: {
        name: { folderName },
      },
    };

    axios
      .post(
        `/api/v1/folders`,
        {
          name: { folderName },
        },

        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log(res);
        window.alert(`업로드완료`);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

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
        <Buttons>
          {userInfo.role === "ADMIN" ? (
            <div>
              {" "}
              <FolderForm onSubmit={handleSubmit(createFolder)}>
                <FolderInput
                  {...register("name", {
                    required: "folderName is requred",
                    minLength: 1,
                  })}
                  placeholder="folderName"
                />

                <FolderButton>폴더 생성</FolderButton>
              </FolderForm>
            </div>
          ) : null}

          <Button>
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
          </Button>

          <Button onClick={handleClickLogout}>
            <FontAwesomeIcon icon={faUser} />
          </Button>
        </Buttons>
      </Column>
    </Nav>
  );
}

export default NavComponent;
