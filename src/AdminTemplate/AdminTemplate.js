import React, { useState, useEffect } from "react";
import "./AdminTemplate.css";

function AdminTemplate(props) {
  const [isTypes, setTypes] = useState("");
  return (
    <div
      className="contents"
      style={{
        marginTop: "10px",
        border: "1px solid grey",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <span>Add Designation</span>
      <span
        style={{
          fontSize: "11px",
          marginTop: "10px",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        Designation Name
      </span>
      <input
        type="text"
        style={{ marginTop: "10px", marginBottom: "10px", outline: "none" }}
        id="text"
        value={isTypes}
        onChange={(e) => setTypes(e.target.value)}
      />
      <div>
        <button
          type="button"
          className="button-admin"
          style={{
            marginRight: "5px",
            backgroundColor: isTypes.length === 0 ? "grey" : "white",
            pointerEvents: isTypes.length === 0 ? "none" : "visible",
          }}
        >
          Submit
        </button>
        <button className="button-admin" type="button">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default AdminTemplate;
