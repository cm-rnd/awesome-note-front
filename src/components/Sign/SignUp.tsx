import { useForm } from "react-hook-form";
import {
  Message,
  SignButton,
  SignForm,
  SignInput,
} from "../StyleComponent/SignStyle";

interface FormData {
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

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>();
  const onValid = (data: FormData) => {
    if (data.password != data.passwordCheck) {
      setError(
        "password",
        { message: "비밀번호가 같지 않습니다." },
        { shouldFocus: true },
      );
    }
    setError("extraError", { message: "서버 닫힘" });
  };

  return (
    <div>
      <SignForm onSubmit={() => handleSubmit(onValid)}>
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
            minLength: 4,
          })}
          placeholder="UserName"
        />

        <span>{errors?.userName?.message}</span>
        <SignInput
          {...register("password", { required: "Password is requred" })}
          placeholder="Password"
        />

        <span>{errors?.password?.message}</span>
        <SignInput
          {...register("passwordCheck", {
            required: "Passwordcheck is requred",
          })}
          placeholder="Password Check"
        />

        <span>{errors?.passwordCheck?.message}</span>
        <SignInput
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@+^[A-Za-z0-9._%+-]$/,
              message: "email is not invalid",
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
