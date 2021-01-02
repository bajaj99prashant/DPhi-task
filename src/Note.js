import { Link } from "@reach/router";
import React, { useState, useEffect } from "react";
import "./note.css";
import { useDiaryNotesAPI } from "./DataLayer";

function Note({ note }) {
  // eslint-disable-next-line
  const [state, dispatch] = useDiaryNotesAPI();
  const [noteDate, setDate] = useState("");

  useEffect(() => {
    const new_date_ob = new Date(note.timestamp);
    setDate(new_date_ob.toDateString());
  }, []);

  const deleteNote = () => {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
  };

  return (
    <div className="p-2 my-3 main-note">
      <div className="d-flex justify-content-between align-items-center">
        <h5>{note.title}</h5>
        <p>{noteDate}</p>
      </div>
      <p className="text-small">{note.description}</p>
      <Link to={`/edit-note/${note.id}`}>edit</Link>{" "}
      <button className="text-primary btn btn-sm" onClick={deleteNote}>
        delete
      </button>
    </div>
  );
}

export default Note;
