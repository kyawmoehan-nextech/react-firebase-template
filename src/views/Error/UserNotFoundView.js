import React from "react";
import "./usernotfoundview.css";

const UserNotFoundView = () => {
  return (
    <div>
      <div className="container-fluid my-5">
        <div className="text-center">
          <div className="error mx-auto" data-text="404">
            404
          </div>
          <p className="lead text-gray-800 mb-5">Page Not Found</p>
          <p className="text-gray-500 mb-5">
            It looks like you found a glitch in the matrix...
          </p>
          <div className="bla">
            <a href="/" className="notfound">
              &larr; Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNotFoundView;
