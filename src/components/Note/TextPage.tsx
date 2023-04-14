import { useParams } from "react-router-dom";
import { TextContainer } from "../StyleComponent/NoteStyle";
import { useRecoilState } from "recoil";
import { noteState } from "@/atoms/atoms";

export function TextPage() {
  const { noteId } = useParams();

  const [notes, setNotes] = useRecoilState(noteState);

  console.log(notes);

  return <TextContainer>i'm textContainer</TextContainer>;
}
