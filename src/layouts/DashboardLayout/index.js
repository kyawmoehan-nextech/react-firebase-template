import React from "react";
import { Link, Outlet } from "react-router-dom";

const index = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/income">Income</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default index;
