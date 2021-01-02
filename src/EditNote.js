import { navigate } from "@reach/router";
import React, { useState, useEffect } from "react";
import { useDiaryNotesAPI } from "./DataLayer";

function EditNote({ id }) {
  const [state, dispatch] = useDiaryNotesAPI();
  // eslint-disable-next-line
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [err, setErr] = useState("");
  useEffect(() => {
    console.log(id);
    const editNote = state?.filter((obj) => obj.id === id);
    console.log(editNote);
    setTitle(editNote[0]?.title);
    setDescription(editNote[0]?.description);
  }, []);

  const handleEditTodo = (e) => {
    setErr("");
    e.preventDefault();
    if (title !== "" && description !== "") {
      const note = {
        id: id,
        title: title,
        description: description,
        timestamp: +new Date(),
      };

      dispatch({
        type: "UPDATE_NOTE",
        note: note,
      });

      navigate("/");
    } else {
      setErr("Please fill both the fields.");
    }
  };
  return (
    <div className="container w-100 mx-auto w-sm-75 my-2">
      <h3 className="my-4 text-center">Edit Note</h3>
      <form onSubmit={handleEditTodo}>
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
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            col="4"
            value={description}
          ></textarea>
        </div>
        <p className="text-center my-2 text-danger">{err}</p>
        <button type="submit" className="btn btn-sm btn-primary">
          Edit Note
        </button>
      </form>
    </div>
  );
}

export default EditNote;
