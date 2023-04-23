import React from "react";
import { Link } from "react-router-dom";
import "./eachDocApplication.css";

function EachDocApplication({ data }) {
  return (
    <div className="eachDocApplication">
      <div className="sidebar-backButton">
        <Link to="/admin">
          <button>Back</button>
        </Link>
      </div>
      <div className="eachApplication">
        <p className="date-time">{data.time}</p>
        <h2 className="docName">Dr. {data.name}</h2>
        <a href="">Medical Licence</a>
        <div className="about">
          <p className="heading">About :</p>
          <p className="text">{data.about}</p>
        </div>
        <div className="educationBackground">
          <p className="heading">Education :</p>
          <p className="text">{data.eduBackground}</p>
        </div>
        <div className="address">
          <p className="heading">Hospital / Clinic Address :</p>
          <p className="text">{data.address}</p>
        </div>
        <div className="bottom">
          <div className="left">
            <button className="verify">Verify</button>
            <button className="reject">Reject</button>
          </div>
          <div className="right">
            <button className="underVerification">
              Keep Under Verification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EachDocApplication;
