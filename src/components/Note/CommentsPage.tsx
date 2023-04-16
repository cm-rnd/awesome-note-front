import { Container, Typography } from "@mui/material";
import PageContainer from "../PageContainer";
import { CommentsContainer, TextContainer } from "../StyleComponent/NoteStyle";
import TextDashboardCard from "../Upload/TextDashBoard";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { userInfoState } from "@/atoms/atoms";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router";
import { getComments } from "@/apis/Api";
import { useRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { SignInput } from "../StyleComponent/SignStyle";

const CommentsList = styled.div`
  height: 260px;
  width: auto;
`;

export function CommentsPage() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const { noteId } = useParams();

  const noteIdNumber = noteId ?? 0;
  const loginId = userInfo.loginId;
  const id = userInfo.id;
  const nickname = userInfo.nickname;
  const role = userInfo.role;

  const noteNum = noteId ?? 0;

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
  } = useForm<CommentForm>();

  interface CommentForm {
    comment: "string";
    noteId: number;
  }
  const CommentButton = styled.button`
    padding: 5px 10px;
    background-color: #d9dce3;
    color: rgba($color: rgb(41, 34, 34), $alpha: 0.808);
    text-align: center;
  `;

  const commentPost = async ({ comment, noteId }: CommentForm) => {
    return await axios
      .post(`http://localhost:8080/api/v1/notes/${noteId}/comments`, comment, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        window.alert(`업로드완료`);
      })
      .catch(function (error) {
        console.log(comment, "커맨트");
        console.log(noteId, "노트아이디");
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
  const CommentInput = styled.input`
    all: unset;
    padding: 1px 10px;
    border-radius: 5px;
    border: 3px solid rgba(5, 5, 5, 0.34);
    background-color: #dddee2;
    margin-bottom: 10px;
    color: rgba(33, 26, 26, 0.858);
    font-size: 15px;
    width: 87%;
  `;

  const CommentForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 320px;
    width: 150;
    margin: 0 auto;
    padding: 20px;
    background-color: #0d121ebf;
    border-radius: 5px;
    border: 1px solid rgba($color: #fff, $alpha: 0.208);
  `;

  const { data: commentData } = useQuery(
    [`noteInfo`, noteIdNumber, id, loginId, nickname, role],
    () => getComments(+noteIdNumber, id, loginId, nickname, role),
  );
  console.log(commentData, "커멘츠 데이타");

  return (
    <CommentsContainer>
      <PageContainer title="Notes" description=" note">
        <TextDashboardCard>
          <CommentsList>
            <Typography variant="h5">댓글</Typography>

            <Typography variant="body1"></Typography>
          </CommentsList>
          <CommentForm onSubmit={handleSubmit(commentPost)}>
            <CommentInput
              {...register("comment", {
                required: "comment is requred",
                minLength: 1,
              })}
              placeholder="Comment"
            />

            <CommentButton>댓글 작성</CommentButton>
          </CommentForm>
        </TextDashboardCard>
      </PageContainer>
    </CommentsContainer>
  );
}
