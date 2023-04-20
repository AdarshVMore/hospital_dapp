import React, { useState, useEffect } from "react";
import "./signin.css";
import Verify from "../verify/Verify";

function Signin() {
  const [user, setUser] = useState(0);

  useEffect(() => {
    const sliderElement = document.getElementsByClassName("slider")[0];
    if (user === 0) {
      sliderElement.style.transform = "translateX(-62px)";
    } else if (user === 1) {
      sliderElement.style.transform = "translateX(62px)";
    }
  }, [user]);

  return (
    <div className="signin">
      <div className="top-most">
        <div className="slide-btn">
          <span
            className="patient"
            onClick={() => {
              setUser(0);
            }}
          >
            Patient
          </span>
          <span
            className="doctor"
            onClick={() => {
              setUser(1);
            }}
          >
            Doctor
          </span>
          <span className="slider"></span>
        </div>
      </div>
      <div className="form-container">
        {user === 0 ? (
          <div className="asAPatient">
            <form action="/">
              <input type="text" placeholder="Patient's Name" />
              <input type="text" placeholder="Patient's Age" />
              <input type="text" placeholder="Wallet Address" />
              <button>Register</button>
            </form>
          </div>
        ) : null}
        {user === 1 ? (
          <div className="asADocter">
            <form action="/">
              <input type="text" placeholder="Doctor's Name" />
              <input type="text" placeholder="Doctor's Age" />
              <input type="text" placeholder="Wallet Address" />
              <button
                onClick={() => {
                  setUser(3);
                }}
              >
                Verify
              </button>
            </form>
          </div>
        ) : null}

        {user === 3 ? (
          <div className="toVerify">
            <Verify />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Signin;
