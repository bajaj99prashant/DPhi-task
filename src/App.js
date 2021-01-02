import "./App.css";
import React from "react";
import Header from "./Header";
import ViewDiary from "./ViewDiary";
import CreateNote from "./CreateNote";
import EditNote from "./EditNote";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App bg-light">
      <Header />
      <Router>
        <ViewDiary path="/" />
        <CreateNote path="/create-note" />
        <EditNote path="/edit-note/:id" />
      </Router>
    </div>
  );
}

export default App;
