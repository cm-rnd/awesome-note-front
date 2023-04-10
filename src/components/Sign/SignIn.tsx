import { useForm } from "react-hook-form";
import {
  Message,
  SignButton,
  SignForm,
  SignInput,
} from "../StyleComponent/SignStyle";
import { useNavigate } from "react-router";
import axios from "axios";
import { useCookies } from "react-cookie";
import { replaceAt } from "react-query/types/core/utils";

interface LoginFormData {
  loginId: string;
  password: string;
  extraError?: string;
}

interface SessionData {
  loginId: string;
  nickname: string;
  role: string;
  token: string;
}

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["loginId"]);
  const LoginPost = (data: LoginFormData) => {
    console.log(data);
    axios
      .post("http://localhost:8080/api/v1/login", data, {
        withCredentials: true,
      })
      .then(
        (res) => {
          console.log(res);

          navigate(`/`);
        },
        // document.location.href = "/";
      )
      .catch((error) => {
        window.alert("로그인 실패");
        console.log(error);
        location.reload();
      });

    setError("extraError", { message: "서버 닫힘" });
  };
  console.log(errors);

  return (
    <div>
      <SignForm onSubmit={handleSubmit(LoginPost)}>
        <SignInput
          {...register("loginId", { required: true, minLength: 1 })}
          placeholder="Login ID"
        />
        <span>{errors?.loginId?.message}</span>
        <SignInput
          {...register("password", { required: true, minLength: 1 })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <SignButton>Sign in</SignButton>
      </SignForm>
      <div>
        <Message>
          <span> Don't have an account? </span>
          <a href="/signup"> Create one now &rarr; </a>
        </Message>
      </div>
    </div>
  );
}
