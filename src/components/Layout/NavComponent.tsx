import { createFolder, postFiles } from "@/apis/Api";
import { Data, FolderNameForm } from "@/interfaces/CommonInterface";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCloudUpload,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";

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
import { handleClickLogout } from "../Login/LogOut";

function NavComponent({ data }: { data: Data }) {
  const { register, handleSubmit } = useForm<FolderNameForm>();
  const { mutate } = useMutation(postFiles);
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [userInfo] = useRecoilState(userInfoState);

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
