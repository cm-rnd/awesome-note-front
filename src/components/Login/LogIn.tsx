import { useForm } from "react-hook-form";
import {
  Layout,
  Message,
  SignButton,
  SignForm,
  SignInput,
  Title,
  WhiteBox,
} from "../StyleComponent/SignStyle";

import { LoginFormData } from "@/interfaces/CommonInterface";
import { LoginPost } from "@/apis/Api";
import { useNavigate } from "react-router";
import { userInfoState } from "@/atoms/atoms";
import { useRecoilState } from "recoil";

export function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const handlePost = (data: LoginFormData) => {
    LoginPost(data)
      .then((res) => {
        setUserInfo(res.data.data);
        navigate(`/`);
      })
      .catch((error) => {
        window.alert("로그인 실패");
        console.log(error);
        location.reload();
      });
  };

  return (
    <Layout>
      <WhiteBox>
        <Title>AwesomeNote</Title>
        <h3>로그인</h3>
        <SignForm onSubmit={handleSubmit(handlePost)}>
          <SignInput
            {...register("loginId", { required: true, minLength: 1 })}
            placeholder="Login ID"
          />
          <span>{errors?.loginId?.message}</span>
          <SignInput
            type="password"
            {...register("password", { required: true, minLength: 1 })}
            placeholder="Password"
          />
          <span>{errors?.password?.message}</span>
          <SignButton>Log in</SignButton>
        </SignForm>
        <div>
          <Message>
            <span> Don't have an account? </span>
            <a href="/join"> Create one now &rarr; </a>
          </Message>
        </div>
      </WhiteBox>
    </Layout>
  );
}
