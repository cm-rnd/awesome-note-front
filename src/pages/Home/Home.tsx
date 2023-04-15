import { AllMiddleNote } from "@/components/Note/AllMiddleNote";
import { BottomNote } from "@/components/Note/BottomNote";
import { MiddleNote } from "@/components/Note/MiddleNote";
import { TopNote } from "@/components/Note/TopNote";
import styled from "styled-components";

function Home() {
  return (
    <div>
      <AllMiddleNote />
      <BottomNote />
    </div>
  );
}

export default Home;
