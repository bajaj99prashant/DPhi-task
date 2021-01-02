import { navigate } from "@reach/router";
import React from "react";
import { Link } from "@reach/router";
import "./header.css";

function Header() {
  return (
    <div className="container py-4 border-bottom d-flex justify-content-between align-items-center">
      <h2>
        <Link to="/">Diary Note App</Link>
      </h2>
      <button
        className="btn text-primary"
        onClick={() => navigate("/create-note")}
      >
        Create Note
      </button>
    </div>
  );
}

export default Header;
