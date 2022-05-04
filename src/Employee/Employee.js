import React, { useState } from "react";

function Employee(props) {
  const [openDesiForm, setOpen] = useState(true);
  const [isTypes, setTypes] = useState(false);

  return (
    <>
      {openDesiForm ? (
        <div className="contents">
          <span style={{ fontSize: "18px", fontWeight: "600" }}>
            Employee List
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <button
              type="button"
              style={{ marginBottom: "10px" }}
              onClick={() => setOpen(false)}
            >
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
      ) : (
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
            <button
              className="button-admin"
              type="button"
              onClick={setOpen(true)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Employee;
