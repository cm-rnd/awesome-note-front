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
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  passwordCheck: string;
  extraError?: string;
}

const SignForm = styled.form`
  display: flex;
  flex-direction: column;
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
        <input
          {...register("firstName", {
            required: "firstname is requred",
            minLength: 1,
          })}
          placeholder="FirstName"
        />

        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", {
            required: "lastname is requred",
            minLength: 1,
          })}
          placeholder="LastName"
        />

        <span>{errors?.lastName?.message}</span>
        <input
          {...register("userName", {
            required: "username is requred",
            minLength: 4,
          })}
          placeholder="UserName"
        />

        <span>{errors?.userName?.message}</span>
        <input
          {...register("password", { required: "Password is requred" })}
          placeholder="PassWord"
        />

        <span>{errors?.password?.message}</span>
        <input
          {...register("passwordCheck", {
            required: "Passwordcheck is requred",
          })}
          placeholder="PassWord Check"
        />

        <span>{errors?.passwordCheck?.message}</span>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@$/,
              message: "email is not invalid",
            },
          })}
          placeholder="Email"
        />

        <span>{errors?.email?.message}</span>
        <button>Sign up</button>
        <span>{errors?.extraError?.message}</span>
      </SignForm>
    </div>
  );
}
