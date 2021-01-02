import { navigate } from "@reach/router";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDiaryNotesAPI } from "./DataLayer";

function CreateNote() {
  // eslint-disable-next-line
  const [state, dispatch] = useDiaryNotesAPI();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState();
  const [description, setDescription] = useState("");
  const [err, setErr] = useState("");
  const handleCreateTodo = (e) => {
    setErr("");
    e.preventDefault();
    if (title !== "" && description !== "" && date !== undefined) {
      console.log(+new Date(date));
      const note = {
        id: uuid(),
        title: title,
        description: description,
        timestamp: +new Date(date),
      };

      dispatch({
        type: "ADD_NOTE",
        note: note,
      });

      navigate("/");
    } else {
      setErr("Please fill both the fields.");
    }
  };
  return (
    <div className="container w-100 mx-auto w-sm-75 my-2">
      <h3 className="my-4 text-center">Create Note</h3>
      <form onSubmit={handleCreateTodo}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control form-control-sm"
            placeholder="Enter title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control form-control-sm"
            name="description"
            placeholder="Enter Description"
            onChange={(e) => setDescription(e.target.value)}
            col="4"
          >
            {description}
          </textarea>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-control form-control-sm"
            placeholder="Enter title"
          />
        </div>
        <p className="text-center my-2 text-danger">{err}</p>
        <button type="submit" className="btn btn-sm btn-primary">
          Create Note
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
