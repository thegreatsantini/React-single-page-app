import React from "react";
import broken from './imbroken.gif';
import './NotFound.css';

const NotFound = props => {
  return (
    <div className="page-container">
      <div className="bg" style={{ backgroundImage: "url(" + broken + ")" }} />
      <h1 className="title">404</h1>
    </div>
  );
};

export default NotFound;
