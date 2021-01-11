import React from "react";
import { Link } from "react-router-dom";
import "./Toolbar.css";

const Toolbar = ({ name, path }) => {
  return (
    <div className="text-right my-5">
      <Link to={path} className="text-link">
        <i className="fa fa-plus" aria-hidden="true"></i>
        {name}
      </Link>
    </div>
  );
};

export default Toolbar;
