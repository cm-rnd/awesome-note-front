import axios from "axios";
import { useNavigate } from "react-router-dom";
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

interface Form {
  errors: {
    email: {
      message: string;
    };
  };
  nickname: string;
  loginId: string;
  password: string;
  passwordCheck: string;
  extraError?: string;
  email: string;
}

interface ApiForm {
  nickname: string;
  loginId: string;
  password: string;
}

export function Join() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
  } = useForm<Form>();

  const navigate = useNavigate();
  const onPost = (data: Form) => {
    console.log(data);
    axios
      .post<ApiForm>("http://localhost:8080/api/v1/signup", data, {
        headers: { ContentType: "application/json" },
      })
      .then((res) => {
        console.log(res);
        window.alert(`회원가입 완료`);
        navigate(`/login`);
      })
      .catch((error) => {
        window.alert(`회원가입 실패`);
        console.log(error);
      });

    setError("extraError", { message: "서버 닫힘" });
  };
  console.log(errors);

  return (
    <Layout>
      <WhiteBox>
        <Title>AwesomeNote</Title>
        <h3>회원가입</h3>
        <SignForm onSubmit={handleSubmit(onPost)}>
          <SignInput
            {...register("nickname", {
              required: "name is requred",
              minLength: 1,
            })}
            placeholder="Name"
          />

          <span>{errors?.nickname?.message}</span>

          <SignInput
            {...register("loginId", {
              required: "ID is requred",
              minLength: {
                value: 4,
                message: "ID는 4자 이상 입력해야 합니다.",
              },
            })}
            placeholder="LoginId"
          />

          <span>{errors?.loginId?.message}</span>
          <SignInput
            type="password"
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
            type="password"
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

          <SignButton>JOIN</SignButton>
        </SignForm>
        <Message>
          <span> Already have an account? </span>
          <a href="/login"> Log In now &rarr; </a>
        </Message>
      </WhiteBox>
    </Layout>
  );
}
