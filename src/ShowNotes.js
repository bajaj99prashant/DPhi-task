import React, { useState, useEffect } from "react";
import Note from "./Note";
import {
  handleNewest,
  handleOldest,
  handleDateWise,
  handleByTimestamp,
} from "./handleSorting";

function ShowNotes({ notes }) {
  const [editableNotes, setEditableNotes] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    setEditableNotes(notes);
  }, [notes]);

  const handleSort = (sortingParameter) => {
    if (sortingParameter === "newest") {
      setEditableNotes(handleNewest(notes));
    } else if (sortingParameter === "oldest") {
      setEditableNotes(handleOldest(notes));
    } else if (sortingParameter === "today") {
      setEditableNotes(handleDateWise(notes, 1));
    } else if (sortingParameter === "week") {
      setEditableNotes(handleDateWise(notes, 7));
    } else if (sortingParameter === "month") {
      setEditableNotes(handleDateWise(notes, 30));
    } else {
      setEditableNotes(handleDateWise(notes, 365));
    }
  };

  const handleDateSort = (val) => {
    setDate(val);
    setEditableNotes(handleByTimestamp(notes, new Date(date).getTime()));
    console.log(editableNotes);
  };

  return (
    <div>
      <div className="d-flex justify-content-between py-2 align-items-center">
        <p>SortBy:</p>
        <ul className="nav px-2">
          <li className="nav-item">
            <button
              className="nav-link btn btn-sm"
              onClick={() => handleSort("newest")}
            >
              newest
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn btn-sm"
              onClick={() => handleSort("oldest")}
            >
              oldest
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn btn-sm"
              onClick={() => handleSort("today")}
            >
              today
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn btn-sm"
              onClick={() => handleSort("week")}
            >
              this week
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn btn-sm"
              onClick={() => handleSort("month")}
            >
              this month
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn btn-sm"
              onClick={() => handleSort("year")}
            >
              this year
            </button>
          </li>
          <li className="nav-item">
            <input
              type="date"
              className="form-control-sm form-control mt-1"
              value={date}
              onChange={(e) => handleDateSort(e.target.value)}
            />
          </li>
        </ul>
      </div>
      {editableNotes.map((obj) => (
        <Note note={obj} key={obj.id} />
      ))}
    </div>
  );
}

export default ShowNotes;
