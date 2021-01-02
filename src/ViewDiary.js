import React from "react";
import ShowNotes from "./ShowNotes";
import { useDiaryNotesAPI } from "./DataLayer";
import NoDataFallback from "./NoDataFallback";

function ViewDiary() {
  const [state] = useDiaryNotesAPI();
  return (
    <div className="container pt-2">
      {state.length !== 0 ? <ShowNotes notes={state} /> : <NoDataFallback />}
    </div>
  );
}

export default ViewDiary;
