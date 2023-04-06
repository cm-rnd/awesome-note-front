import { useForm } from "react-hook-form";
import {
  Message,
  SignButton,
  SignForm,
  SignInput,
} from "../StyleComponent/SignStyle";
import { useNavigate } from "react-router";
import axios from "axios";

interface LoginFormData {
  loginId: string;
  password: string;
  extraError?: string;
}

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>();
  const navigate = useNavigate();
  const LoginPost = (data: LoginFormData) => {
    console.log(data);
    axios
      .post("http://192.168.159.42:20000/api/v1/login", data, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        console.log("res.data.data.loginId :: ", res.data.data.loginId);
        //console.log(res.headers.getAuthorization);

        if (res.data.data.loginId === undefined) {
          alert("id가 없습니다.");
        } else if (res.data.data.password === null) {
          alert("비밀번호가 일치하지 않습니다.");
        } else if (res.data.data.loginId === data.loginId) {
          sessionStorage.setItem("login_id", res.data.data.loginId);
          sessionStorage.setItem("role", res.data.data.role);
          sessionStorage.setItem("nickname", res.data.data.nickname);
          console.log("로그인 완료");
          navigate(`/`);
        }
        // document.location.href = "/";
      })
      .catch((error) => {
        window.alert("로그인 실패");
        console.log(error);
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
