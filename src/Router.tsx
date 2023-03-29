import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Note from "./pages/Home/Switch/Note";

import NotePage from "./pages/Home/Switch/NotePage";
import { SignIn, SignUp } from "./pages/Sign/SignComponent";

import Sign from "./pages/Sign/SignPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":teamId",
        element: <Note />,
        children: [{ path: "page", element: <NotePage /> }],
      },
    ],
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "signin",
    element: <SignIn />,
  },
]);

export default router;
