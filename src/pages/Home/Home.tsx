import { BottomNote } from "@/components/Note/BottomNote";
import { MiddleNote } from "@/components/Note/MiddleNote";
import { TopNote } from "@/components/Note/TopNote";
import styled from "styled-components";

function Home() {
  return (
    <div>
      <TopNote />
      <MiddleNote />
      <BottomNote />
    </div>
  );
}

export default Home;
