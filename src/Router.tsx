import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home/Home";
import Note from "./pages/Home/Switch/Note";

import NotePage from "./pages/Home/Switch/NotePage";

import RefTeamNotesPage from "./pages/Home/Switch/RefTeamNotes";
import ReferenceNotePage from "./pages/Home/Switch/ReferenceNote";
import { Join } from "./components/Login/Join";
import { LogIn } from "./components/Login/LogIn";

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
        path: "/page/:teamId",
        element: <RefTeamNotesPage />,
      },
      {
        path: ":noteId",
        element: <NotePage />,
      },
      { path: "/page/allnotes", element: <ReferenceNotePage /> },
    ],
  },
  {
    path: "join",
    element: <Join />,
  },
  {
    path: "login",
    element: <LogIn />,
  },
]);

export default router;
