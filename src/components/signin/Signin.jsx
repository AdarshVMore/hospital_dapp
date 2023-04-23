import React, { useState, useEffect, useRef } from "react";
import "./signin.css";
import Verify from "../verify/Verify";

function Signin({ contract, account }) {
  const [user, setUser] = useState(0);
  const [opt, setOpt] = useState(null);
  const pnameRef = useRef();
  const pageRef = useRef();
  const dnameRef = useRef();
  const dageRef = useRef();

  const registerAsP = async (e) => {
    setOpt("P");
    console.log(opt);
  };
  const registerAsD = (e) => {
    setOpt("D");
    console.log(opt);
  };

  const add_patient = async (e) => {
    e.preventDefault();
    const pname = pnameRef.current.value;
    const page = pageRef.current.value;
    const addingPatient = await contract.add_agent(pname, page, 0);
    console.log("patient added named", pname, "age:", page);
  };

  const add_doctor = async (e) => {
    e.preventDefault();
    const dname = dnameRef.current.value;
    const dage = dageRef.current.value;
    const addingDoctor = await contract.add_agent(dname, dage, 1);
    console.log("Doctor added named", dname, "age:", dage);
  };

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
              <input
                required
                type="text"
                ref={pnameRef}
                placeholder="Patient's Name"
              />
              <input
                required
                type="text"
                ref={pageRef}
                placeholder="Patient's Age"
              />
              <input required type="text" placeholder="Wallet Address" />
              <button onClick={add_patient}>Register</button>
            </form>
          </div>
        ) : null}
        {user === 1 ? (
          <div className="asADocter">
            <form action="/">
              <input
                required
                type="text"
                ref={dnameRef}
                placeholder="Doctor's Name"
              />
              <input
                required
                type="text"
                ref={dageRef}
                placeholder="Doctor's Age"
              />
              <input required type="text" placeholder="Wallet Address" />
              <div onClick={add_doctor}>
                <button
                  onClick={() => {
                    setUser(3);
                  }}
                >
                  Verify
                </button>
              </div>
            </form>
          </div>
        ) : null}

        {user === 3 ? (
          <div className="toVerify">
            <Verify contract={contract} account={account} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Signin;
