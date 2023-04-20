import React, { useState, useEffect } from "react";
import "./admin.css";

function AdminHome() {
  const [selectedBtn, setSelectedBtn] = useState(0);
  const [heading, setHeading] = useState("");
  const [data, setData] = useState([
    {
      name: "Alice",
      time: new Date("2023-04-19T10:30:00Z"),
    },
    {
      name: "Bob",
      time: new Date("2023-04-20T14:45:00Z"),
    },
    {
      name: "Charlie",
      time: new Date("2023-04-18T08:15:00Z"),
    },
    {
      name: "David",
      time: new Date("2023-04-21T16:00:00Z"),
    },
    {
      name: "Eve",
      time: new Date("2023-04-17T19:20:00Z"),
    },
  ]);

  useEffect(() => {
    if (selectedBtn === 0) {
      setHeading("All Applications");
    }
    if (selectedBtn === 1) {
      setHeading("New Applications");
    }
    if (selectedBtn === 2) {
      setHeading("Under Applications");
    }
    if (selectedBtn === 3) {
      setHeading("Verified Applications");
    }
    if (selectedBtn === 4) {
      setHeading("Rejected Applications");
    }

    // remove the "selected" class from all buttons except the clicked one
    const buttons = document.querySelectorAll(".btns button");
    buttons.forEach((button, index) => {
      if (index !== selectedBtn) {
        button.classList.remove("selected");
      }
    });
  }, [selectedBtn]);

  return (
    <div className="admin">
      <div className="btns">
        <button
          id={`${selectedBtn === 0 ? "selected" : ""}`}
          onClick={() => {
            setSelectedBtn(0);
          }}
        >
          All
        </button>
        <button
          id={`${selectedBtn === 1 ? "selected" : ""}`}
          onClick={() => {
            setSelectedBtn(1);
          }}
        >
          New Applications
        </button>
        <button
          id={`${selectedBtn === 2 ? "selected" : ""}`}
          onClick={() => {
            setSelectedBtn(2);
          }}
        >
          UnderVerification
        </button>
        <button
          id={`${selectedBtn === 3 ? "selected" : ""}`}
          onClick={() => {
            setSelectedBtn(3);
          }}
        >
          Verified
        </button>
        <button
          id={`${selectedBtn === 4 ? "selected" : ""}`}
          onClick={() => {
            setSelectedBtn(4);
          }}
        >
          Rejected
        </button>
      </div>
      <div className="listOfApplicants">
        <div className="top">
          <p className="heading">{heading}</p>
          <div className="colors">
            <div className="c transparent"></div>
            <div className="c yellow"></div>
            <div className="c green"></div>
            <div className="c red"></div>
          </div>
        </div>

        <div className="allList">
          {data.map((item, index) => (
            <div className="eachList" key={index}>
              <div className="docName">{item.name}</div>
              <div className="timeDate">{item.time.toString()}</div>
              <div className="level"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
