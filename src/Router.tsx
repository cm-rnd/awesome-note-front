import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Note from "./pages/Home/Switch/Note";

import NotePage from "./pages/Home/Switch/NotePage";

import RefTeamNotesPage from "./pages/Home/Switch/RefTeamNotes";
import RefNotePage from "./pages/Home/Switch/RefNote";
import { Join } from "./components/Login/Join";
import { LogIn } from "./components/Login/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/page/:teamId",
        element: <RefTeamNotesPage />,
      },
      {
        path: ":noteId",
        element: <NotePage />,
      },
      { path: "/page/allnotes", element: <RefNotePage /> },
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
