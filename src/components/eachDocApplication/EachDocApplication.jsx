import React from "react";
import { Link } from "react-router-dom";

function EachDocApplication({ data }) {
  return (
    <div>
      <div className="sidebar-backButton">
        <button>
          <Link to="/admin">Back</Link>
        </button>
      </div>
      <div className="eachDocApplication"></div>
    </div>
  );
}

export default EachDocApplication;
