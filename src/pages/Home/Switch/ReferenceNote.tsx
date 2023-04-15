import { DefaultNotes } from "@/components/Board/DefaultNotes";
import { MiddleNote } from "@/components/Note/MiddleNote";
import { TopNote } from "@/components/Note/TopNote";
import { ViewAllNotes } from "@/components/Note/ViewAllNote";

function ReferenceNotePage() {
  return (
    <div>
      <TopNote />
      <MiddleNote />
      <ViewAllNotes />
    </div>
  );
}
export default ReferenceNotePage;
