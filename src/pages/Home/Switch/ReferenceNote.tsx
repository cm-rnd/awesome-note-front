import { DefaultNotes } from "@/components/Board/DefaultNotes";
import { AllMiddleNote } from "@/components/Note/AllMiddleNote";
import { MiddleNote } from "@/components/Note/MiddleNote";
import { TopNote } from "@/components/Note/TopNote";
import { ViewAllNotes } from "@/components/Note/ViewAllNote";

function ReferenceNotePage() {
  return (
    <div>
      <AllMiddleNote />
      <ViewAllNotes />
    </div>
  );
}
export default ReferenceNotePage;
