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
  padding: 1rem;
  background-color: #0d121ebf;
  border-radius: 5px;
  border: 1px solid rgba($color: #fff, $alpha: 0.208);
`;

export const Message = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const Layout = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  right: 0;

  background: #bdcdd6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    font-weight: bold;

    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 22rem;
  background: rgb(255, 255, 255, 0.5);
  border-radius: rem;
`;

export const Title = styled.title`
  display: block;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: match-parent;

  width: 16rem;
  height: 1.7rem;
  padding: 1.25rem;
  border-radius: 0.8rem 0.8rem 0 0;
`;
