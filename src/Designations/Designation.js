import React from "react";

function Designation() {
  return (
    <div className="contents">
      <span style={{ fontSize: "18px", fontWeight: "600" }}>
        Designation List
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <button type="button" style={{ marginBottom: "10px" }}>
          Add new Record
        </button>
        <input type="search" placeholder="search" />
      </div>
      <span>
        Show
        <select style={{ marginLeft: "5px", marginRight: "5px" }}>
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </select>
      </span>
      <span>entries</span>
    </div>
  );
}

export default Designation;
