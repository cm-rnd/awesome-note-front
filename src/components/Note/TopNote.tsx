import {
  NoteColumn,
  NoteItem,
  NoteItems,
  TopNoteContainer,
} from "@/components/StyleComponent/NoteStyle";
import {
  faShareFromSquare,
  faThumbsDown,
  faThumbsUp,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useDataSet from "../hook/useDataSet";

export function TopNote() {
  return (
    <TopNoteContainer>
      <NoteColumn>
        <NoteItems>
          <NoteItem>
            <FontAwesomeIcon icon={faShareFromSquare} />
          </NoteItem>
          <NoteItem>
            <FontAwesomeIcon icon={faThumbsUp} />
          </NoteItem>
          <NoteItem>
            <FontAwesomeIcon icon={faThumbsDown} />
          </NoteItem>
          <NoteItem>
            <FontAwesomeIcon icon={faTrash} />
          </NoteItem>
        </NoteItems>
      </NoteColumn>
    </TopNoteContainer>
  );
}
