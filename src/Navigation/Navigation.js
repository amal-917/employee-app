import React, { useState } from "react";
import "./Navigation.css";

function Navigation(props) {
  const [classCheck, setClass] = useState(false);
  const changeValue = (e) => {
    props.dataChange(e);
  };
  return (
    <div className="navbar">
      <div className="contents">
        <div className="nav-contents">
          <div>
            <span
              className="nav-elements"
              onClick={() => changeValue("adminTemplate")}
            >
              Admin Template
            </span>
            <span className="nav-elements" onClick={() => changeValue("home")}>
              Home
            </span>
            <span
              className="nav-elements"
              onClick={() => changeValue("Employees")}
            >
              Employees
            </span>
            <span
              className="nav-elements"
              onClick={() => changeValue("designation")}
            >
              Designations
            </span>
          </div>
          <div>
            <span>Welcome pixbit</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
