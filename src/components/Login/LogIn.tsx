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

export function LogIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  return (
    <Layout>
      <WhiteBox>
        <Title>AwesomeNote</Title>
        <h3>로그인</h3>
        <SignForm onSubmit={handleSubmit(LoginPost)}>
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
