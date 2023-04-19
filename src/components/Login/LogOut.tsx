import axios from "axios";
import { useNavigate } from "react-router";

const navigate = useNavigate();

export const handleClickLogout = () => {
  axios
    .post(`http://localhost:8080/api/v1/logout`, null, {
      withCredentials: true,
    })
    .then((data) => {
      window.alert(`로그아웃`);
      navigate(`/login`);
    });
};
