import { axiosTeams, postFiles } from "@/apis/Api";
import { Data } from "@/interfaces/CommonInterface";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCloudUpload,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useMutation, useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userInfoState } from "@/atoms/atoms";
import {
  Button,
  Buttons,
  Column,
  FolderButton,
  FolderForm,
  FolderInput,
  Item,
  Items,
  Nav,
} from "../StyleComponent/NavStyle";

interface FolderNameForm {
  name: "string";
}
function NavComponent({ data }: { data: Data }) {
  const { register, handleSubmit } = useForm<FolderNameForm>();

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
        window.alert(`로그아웃`);
        navigate(`/login`);
      });
  };

  const createFolder = async (folderName: FolderNameForm) => {
    axios
      .post(
        "http://localhost:8080/api/v1/folders",
        {
          name: folderName.name,
        },

        {
          headers: { ContentType: "application/json" },
          withCredentials: true,
        },
      )
      .then((res) => {
        window.alert(`업로드완료`);
        navigate("/page/allnotes");
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
