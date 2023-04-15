import { DefaultNotes } from "@/components/Board/DefaultNotes";
import { MiddleNote } from "@/components/Note/MiddleNote";
import { TopNote } from "@/components/Note/TopNote";
import ViewTeamNotes from "@/components/Note/ViewTeamNotes";

function RefTeamNotesPage() {
  return (
    <div>
      <MiddleNote />
      <ViewTeamNotes />
    </div>
  );
}
export default RefTeamNotesPage;
