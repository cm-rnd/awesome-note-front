import styled from "styled-components";

export const SignInput = styled.input`
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
export const SignButton = styled.button`
  padding: 12px 20px;
  background-color: #d9dce3;
  color: rgba($color: rgb(41, 34, 34), $alpha: 0.808);
  text-align: center;
`;

export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  margin: 0 auto;
  padding: 20px;
  background-color: #0d121ebf;
  border-radius: 5px;
  border: 1px solid rgba($color: #fff, $alpha: 0.208);
`;

export const Message = styled.div`
  margin: 0 auto;
  text-align: center;
`;
