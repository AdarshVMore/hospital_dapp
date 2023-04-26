import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./allRecord.css";
import { PAddressRef } from "../topNav/TopNav";

function AllRecords({ contract, account, isDoc }) {
  const [patientInfo, setPatientInfo] = useState([]);
  const [click, setClick] = useState(false);
  let addr;

  const getPatient = async (e) => {
    if (isDoc) {
      addr = PAddressRef.current.value;
    } else {
      addr = account;
    }
    console.log(addr);

    const Info = await contract.get_patient(addr);
    console.log(Info);
    setPatientInfo(Info);
    setClick(true);
    // console.log(
    //   patientInfo,
    //   patientInfo[0],
    //   patientInfo[2][0].patientAddress,
    //   click
    // );
  };
  return (
    <div className="allRecords">
      <div className="top">
        {isDoc ? (
          <>
            <Link to="upload">
              <button className="upload">Upload</button>
            </Link>
          </>
        ) : (
          ""
        )}

        <div onClick={() => {}}>
          <button
            className="upload"
            onClick={() => {
              getPatient();
            }}
          >
            Records
          </button>
        </div>
      </div>
      <div className="bottom">
        {click
          ? patientInfo[2].map((record, i) => (
              <>
                <div className="record">
                  <div className="info">
                    <p className="date">3rd May</p>
                    <p className="docName">{record.doctorName}</p>
                    <p className="desease">{record.details}</p>
                    <a
                      href={`https://ipfs.io/ipfs/${record.report}`}
                      className="report"
                      target="_blank"
                    >
                      Report
                    </a>
                    <div className="medicationDiv">
                      <p className="medication">{record.Medication}</p>
                    </div>
                    <a
                      href={`https://ipfs.io/ipfs/${record.bill}`}
                      className="bills"
                      target="_blank"
                    >
                      Bills
                    </a>
                  </div>
                  <div className="viewBtn">
                    <button>View</button>
                  </div>
                </div>
              </>
            ))
          : ""}
      </div>
    </div>
  );
}

export default AllRecords;
