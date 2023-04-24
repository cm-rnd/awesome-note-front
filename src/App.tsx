import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import NavComponent from "./components/Layout/NavComponent";
import { useQuery } from "react-query";
import { Data, IUserInfo } from "./interfaces/CommonInterface";
import { axiosTeams, axiosUser } from "./apis/Api";
import { useRecoilState } from "recoil";
import { userInfoState } from "./atoms/atoms";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
}
a {
  text-decoration:none;
}

`;

const App = () => {
  const { data } = useQuery<Data>(["teamInfo"], axiosTeams);
  const { data: userData, isFetched } = useQuery<IUserInfo>(
    ["userInfo"],
    axiosUser,
  );

  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  useEffect(() => {
    if (userData) {
      setUserInfo(userData);
    }
  }, [isFetched]);

  return (
    <>
      {data && (
        <>
          <GlobalStyle />
          <NavComponent data={data} />
          <Outlet context={data} />
        </>
      )}
    </>
  );
};
export default App;
