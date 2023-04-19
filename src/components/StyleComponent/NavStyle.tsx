import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0px;
  background-color: #bdcdd6;
  font-size: 2rem;
  padding: 1.2rem 4rem;
  color: #eee9da;
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: color 0.3s;
  color: ${(props) => props.theme.secondaryTextColor};
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  transition: color 0.3s;
  padding: 0;
  border-radius: 0.2rem;
  &:hover,
  &:focus {
    cursor: pointer;
    color: ${(props) => props.theme.accentColor};
  }
  &:focus {
    outline: 0.15rem solid ${(props) => props.theme.accentColor};
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
`;
export const Item = styled.li`
  font-size: 1rem;
  margin-right: 50px;
`;

export const FolderInput = styled.input`
  all: unset;
  padding: 1px 1px;
  border-radius: 5px;
  border: 3px solid rgba(5, 5, 5, 0.34);
  background-color: #dddee2;
  margin-bottom: 2px;
  color: rgba(33, 26, 26, 0.858);
  font-size: 15px;
  width: 87%;
  height: 10px;
`;
export const FolderButton = styled.button`
  font-size: 9px;
  height: 16px;
  width: 90%;
`;

export const FolderForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  width: 10;
  height: 20px;
  margin: 0 auto;
  padding: 0;
  background-color: #0d121ebf;
  border-radius: 5px;
`;
