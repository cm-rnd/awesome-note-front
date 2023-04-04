import { BottomNote } from "@/components/Note/BottomNote";
import { MiddleNote } from "@/components/Note/MiddleNote";
import { TopNote } from "@/components/Note/TopNote";
import { Outlet } from "react-router-dom";

function Note() {
  return (
    <div>
      <TopNote />
      <MiddleNote />
      <BottomNote />
      <Outlet />
    </div>
  );
}

export default Note;
/*


- TopNote
    - TransferNote
    - DeleteNote
- MiddleNote
    
       FolderName
    
    - SortNote
        - SortName
        - SortDate
- BottomNote
    - -ViewNote
    - -MoveBar
*/
