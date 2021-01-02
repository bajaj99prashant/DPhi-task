import React, { useState, useEffect } from "react";
import Note from "./Note";
import "./showNotes.css";
import {
  handleNewest,
  handleOldest,
  handleDateWise,
  handleByTimestamp,
} from "./handleSorting";

function ShowNotes({ notes }) {
  const [editableNotes, setEditableNotes] = useState([]);
  const [date, setDate] = useState();
  // eslint-disable-next-line
  const [sortedDateWise, setSortedDateWise] = useState(false);
  const [partitionPeriod, setPartitionPeriod] = useState("none");

  useEffect(() => {
    setEditableNotes(notes);
  }, [notes]);

  const handleSort = (sortingParameter) => {
    if (sortingParameter === "newest") {
      setSortedDateWise(false);
      setPartitionPeriod("none");
      setEditableNotes(handleNewest(notes));
    } else if (sortingParameter === "oldest") {
      setSortedDateWise(false);
      setPartitionPeriod("none");
      setEditableNotes(handleOldest(notes));
    } else if (sortingParameter === "today") {
      setSortedDateWise(true);
      setPartitionPeriod("day wise");
      setEditableNotes(handleDateWise(notes, 1));
    } else if (sortingParameter === "week") {
      setSortedDateWise(true);
      setPartitionPeriod("week wise");
      setEditableNotes(handleDateWise(notes, 7));
    } else if (sortingParameter === "month") {
      setSortedDateWise(true);
      setPartitionPeriod("month wise");
      setEditableNotes(handleDateWise(notes, 30));
    } else {
      setSortedDateWise(true);
      setPartitionPeriod("year wise");
      setEditableNotes(handleDateWise(notes, 365));
    }
  };

  const handleDateSort = (val) => {
    if (val) {
      setDate(val);
      setEditableNotes(handleByTimestamp(notes, new Date(val).getTime()));
    } else {
      setDate("");
      setEditableNotes(handleByTimestamp(notes, 0));
    }
    console.log(val);
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
              className="form-control-sm form-control mt-1 input-date"
              value={date}
              onChange={(e) => handleDateSort(e.target.value)}
            />
          </li>
        </ul>
      </div>
      {!sortedDateWise ? (
        <div>
          {editableNotes.map((obj) => (
            <Note note={obj} key={obj.id} />
          ))}
        </div>
      ) : (
        <div>
          {editableNotes.map((dataArray, i) => (
            <div key={i}>
              <h3>
                {partitionPeriod} {i + 1}
              </h3>
              {dataArray.map((obj) => (
                <Note note={obj} key={obj.id} />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShowNotes;
