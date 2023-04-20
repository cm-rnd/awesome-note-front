import { CommentsPage } from "@/components/Note/CommentsPage";
import { DetailMiddleNote } from "@/components/Note/DetailMiddleNote";
import { TextPage } from "@/components/Note/TextPage";

function NotePage() {
  return (
    <div>
      <DetailMiddleNote />
      <TextPage />
      <CommentsPage />
    </div>
  );
}
export default NotePage;
