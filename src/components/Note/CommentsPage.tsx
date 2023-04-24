import { Typography } from "@mui/material";
import PageContainer from "../Layout/PageContainer";
import { CommentsContainer } from "../StyleComponent/NoteStyle";
import TextDashboardCard from "../Board/TextDashBoard";
import { useRecoilState } from "recoil";
import { userInfoState } from "@/atoms/atoms";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { commentPost, getComments } from "@/apis/Api";

import axios from "axios";
import { useForm } from "react-hook-form";

import { IComment, ICommentForm } from "@/interfaces/CommonInterface";
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

  const { register, handleSubmit } = useForm<ICommentForm>();
  const { data: commentData } = useQuery<IComment[]>(
    [`noteInfo`, noteIdNumber, id, loginId, nickname, role],
    () => getComments(+noteIdNumber, id, loginId, nickname, role),
  );

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
