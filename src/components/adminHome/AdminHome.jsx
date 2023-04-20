import React, { useState, useEffect } from "react";
import "./admin.css";

function AdminHome() {
  const [btnValue, setBtnValue] = useState(0);
  const [heading, setHeading] = useState("");

  useEffect(() => {
    if (btnValue === 0) {
      setHeading("All Applications");
    }
    if (btnValue === 1) {
      setHeading("New Applications");
    }
    if (btnValue === 2) {
      setHeading("Under Applications");
    }
    if (btnValue === 3) {
      setHeading("Verified Applications");
    }
    if (btnValue === 4) {
      setHeading("Rejected Applications");
    }
  }, [btnValue]);

  return (
    <div className="admin">
      <div className="btns">
        <button
          onClick={() => {
            setBtnValue(0);
          }}
        >
          All
        </button>
        <button
          onClick={() => {
            setBtnValue(1);
          }}
        >
          New Applications
        </button>
        <button
          onClick={() => {
            setBtnValue(2);
          }}
        >
          UnderVerification
        </button>
        <button
          onClick={() => {
            setBtnValue(3);
          }}
        >
          Verified
        </button>
        <button
          onClick={() => {
            setBtnValue(4);
          }}
        >
          Rejected
        </button>
      </div>
      <div className="listOfApplicants">
        <div className="top">
          <p className="heading">{heading}</p>
          <div className="colors">
            <div className="transparent"></div>
            <div className="yellow"></div>
            <div className="green"></div>
            <div className="red"></div>
          </div>
        </div>

        <div className="allList">
          <div className="eachList">
            <div className="docName"></div>
            <div className="timeDate"></div>
            <div className="level"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
