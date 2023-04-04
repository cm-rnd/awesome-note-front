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

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>();

  return (
    <div>
      <SignForm>
        <SignInput
          {...register("userName", { required: true, minLength: 1 })}
          placeholder="UserName"
        />
        <span>{errors?.userName?.message}</span>
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
