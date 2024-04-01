import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Navigationbar">
      <ul>
        <li>
          <h1> {<Link to="/">Home</Link>}</h1>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
