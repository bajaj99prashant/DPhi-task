import { Link } from "@reach/router";
import React from "react";

function NoDataFallback() {
  return (
    <div className="text-center p-5">
      <h3>Create a note to get started.</h3>
      <Link to="/create-note">Create Note</Link>
    </div>
  );
}

export default NoDataFallback;
