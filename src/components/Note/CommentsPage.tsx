import { Typography } from "@mui/material";
import PageContainer from "../Layout/PageContainer";
import { CommentsContainer } from "../StyleComponent/NoteStyle";
import TextDashboardCard from "../Board/TextDashBoard";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { userInfoState } from "@/atoms/atoms";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { getComments } from "@/apis/Api";

import axios from "axios";
import { useForm } from "react-hook-form";

import { IComment } from "@/interfaces/CommonInterface";
import {
  CommentButton,
  CommentForm,
  CommentInput,
  CommentsList,
} from "../StyleComponent/CommentStyle";

export function CommentsPage() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const { noteId } = useParams();
  const noteIdNumber = noteId ?? 0;
  const loginId = userInfo.loginId;
  const id = userInfo.id;
  const nickname = userInfo.nickname;
  const role = userInfo.role;

  interface CommentForm {
    comment: string;
    noteId: string;
  }

  const { register, handleSubmit } = useForm<CommentForm>();
  const { data: commentData } = useQuery<IComment[]>(
    [`noteInfo`, noteIdNumber, id, loginId, nickname, role],
    () => getComments(+noteIdNumber, id, loginId, nickname, role),
  );
  const commentPost = async (props: CommentForm) => {
    const { comment, noteId } = props;
    return await axios
      .post(
        `http://localhost:8080/api/v1/notes/${noteId}/comments`,
        {
          content: comment,
        },
        {
          headers: { ContentType: "application/json" },
          withCredentials: true,
        },
      )
      .then((res) => {
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
    <CommentsContainer>
      <PageContainer title="Notes" description=" note">
        <TextDashboardCard>
          <CommentsList>
            <Typography variant="h5">댓글</Typography>
            {commentData?.map((data) => (
              <Typography variant="body1" key={data.commentId}>
                {data.content} 작성자: {data.writerNickname}
              </Typography>
            ))}
          </CommentsList>
          <CommentForm
            onSubmit={handleSubmit((data) =>
              commentPost({ ...data, noteId: noteId ?? "0" }),
            )}
          >
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
