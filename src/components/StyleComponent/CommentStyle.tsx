import styled from "styled-components";

export const CommentsList = styled.div`
  height: 260px;
  width: auto;
`;

interface CommentForm {
  comment: string;
  noteId: string;
}

export const CommentButton = styled.button`
  padding: 5px 10px;
  background-color: #d9dce3;
  color: rgba($color: rgb(41, 34, 34), $alpha: 0.808);
  text-align: center;
`;
export const CommentInput = styled.input`
  all: unset;
  padding: 1px 10px;
  border-radius: 5px;
  border: 3px solid rgba(5, 5, 5, 0.34);
  background-color: #dddee2;
  margin-bottom: 10px;
  color: rgba(33, 26, 26, 0.858);
  font-size: 15px;
  width: 87%;
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 150;
  margin: 0 auto;
  padding: 20px;
  background-color: #0d121ebf;
  border-radius: 5px;
  border: 1px solid rgba($color: #fff, $alpha: 0.208);
`;
