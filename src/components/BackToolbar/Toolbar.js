import React from "react";
import { Link } from "react-router-dom";
import "./Toolbar.css";

function Toolbar({ path }) {
  return (
    <>
      <div className="text-right">
        <Link to={path} className="back-category">
          <button className="back-btn">
            <i className="fas fa-backward"></i>Back
          </button>
        </Link>
      </div>
    </>
  );
}

export default Toolbar;
