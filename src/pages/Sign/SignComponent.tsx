import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useForm } from "react-hook-form";

interface InterfaceFormData {
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

const SignInput = styled.input`
  all: unset;
  padding: 5px 13px;
  border-radius: 5px;
  border: 3px solid rgba(5, 5, 5, 0.34);
  background-color: #dddee2;
  margin-bottom: 10px;
  color: rgba(33, 26, 26, 0.858);
  font-size: 17px;
  width: 90%;
`;
const SignButton = styled.button`
  padding: 12px 20px;
  background-color: #d9dce3 !important;
  color: rgba($color: rgb(41, 34, 34), $alpha: 0.808) !important;
  text-align: center !important;
`;

const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
  padding: 20px;
  background-color: #0d121ebf;
  border-radius: 5px;
  border: 1px solid rgba($color: #fff, $alpha: 0.208);
`;

const Message = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<InterfaceFormData>();
  const onValid = (data: InterfaceFormData) => {
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
      <SignForm onSubmit={handleSubmit(onValid)}>
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
export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<InterfaceFormData>();

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
