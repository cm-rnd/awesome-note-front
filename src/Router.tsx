import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { SignIn } from "./components/Sign/SignIn";
import { SignUp } from "./components/Sign/SignUp";
import Home from "./pages/Home/Home";
import Note from "./pages/Home/Switch/Note";

import NotePage from "./pages/Home/Switch/NotePage";

import Sign from "./pages/Sign/SignPage";
import ReferenceNotePage from "./pages/Home/Switch/ReferenceNote";
import RefTeamNotesPage from "./pages/Home/Switch/RefTeamNotes";

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
        path: ":noteId/page",
        element: <NotePage />,
      },
      {
        path: ":teamId",
        element: <RefTeamNotesPage />,
      },
      {
        path: "allnotes",
        element: <ReferenceNotePage />,
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
