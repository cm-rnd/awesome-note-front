import { AllMiddleNote } from "@/components/Note/AllMiddleNote";
import { BottomNote } from "@/components/Note/BottomNote";

import { Outlet } from "react-router-dom";

function Note() {
  return (
    <div>
      <AllMiddleNote />
      <BottomNote />
      <Outlet />
    </div>
  );
}

export default Note;
