import { useParams } from "react-router-dom";
import { TextContainer } from "../StyleComponent/NoteStyle";

export function TextPage() {
  const { noteId } = useParams();
  return <TextContainer>i'm textContainer</TextContainer>;
}
