import axios from "axios";
import { useForm } from "react-hook-form";
import {
  Message,
  SignButton,
  SignForm,
  SignInput,
} from "../StyleComponent/SignStyle";

interface Form {
  errors: {
    email: {
      message: string;
    };
  };
  name: string;
  userName: string;
  email: string;
  password: string;
  passwordCheck: string;
  extraError?: string;
}

interface PostUserResponse {

        data: Form

}

export function SignUp() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
  } = useForm<Form>();
  const onPost = (data: Form) => {
    axios.post<PostUserResponse>(`api`, data, { headers: { `Content-Type`: `application/json`,},}).then((res)=> {console.log(res); window.alert(`회원가입 완료`); 
    
    history.replace(`/signin`);}
  ).catch((error)=> {window.alert(`회원가입 실패`); console.log(error)})

    setError("extraError", { message: "서버 닫힘" });
  };
  console.log(errors);

  return (
    <div>
      <SignForm onSubmit={handleSubmit(onPost)}>
        <SignInput
          {...register("name", {
            required: "name is requred",
            minLength: 1,
          })}
          placeholder="Name"
        />

        <span>{errors?.name?.message}</span>

        <SignInput
          {...register("userName", {
            required: "username is requred",
            minLength: {
              value: 4,
              message: "username은 4자 이상 입력해야 합니다.",
            },
          })}
          placeholder="UserName"
        />

        <span>{errors?.userName?.message}</span>
        <SignInput
          {...register("password", {
            required: "Password is requred",
            minLength: {
              value: 4,
              message: "비밀번호는 4자 이상 입력해야 합니다.",
            },
          })}
          placeholder="Password"
        />

        <span>{errors?.password?.message}</span>
        <SignInput
          {...register("passwordCheck", {
            required: "Passwordcheck is requred",

            validate: {
              check: (val) => {
                if (getValues("password") !== val) {
                  return "비밀번호가 같지 않습니다.";
                }
              },
            },
          })}
          placeholder="Password Check"
        />

        <span>{errors?.passwordCheck?.message}</span>
        <SignInput
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
          placeholder="Email"
        />

        <span>{errors?.email?.message}</span>

        <SignButton>Sign up</SignButton>
        <span>{errors?.extraError?.message}</span>
      </SignForm>
      <Message>
        <span> Already have an account? </span>
        <a href="/signin"> Sign in now &rarr; </a>
      </Message>
    </div>
  );
}
