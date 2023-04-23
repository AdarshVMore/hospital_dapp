import React, { useEffect, useState } from "react";
import "./myPatient.css";

function MyPatients({ contract, account }) {
  const [patientInfo, setPatientInfo] = useState([]);
  const [patientName, setPatientName] = useState("");
  // console.log(patientInfo);
  useEffect(() => {
    const getPatient = async (e) => {
      const Info = await contract.get_Doctors_Patient(account);
      const patient = await contract.get_patient(Info[0][0]);

      // console.log(Info);
      setPatientInfo(Info);
      console.log(patient);
      setPatientName(patient[0]);
      console.log(patientName);
      // console.log(patientInfo, patientName[0]);
    };

    getPatient();
  }, [contract]);

  return (
    <div className="myPatients">
      <div className="colors">
        <div className="c green"></div>
        <div className="c yellow"></div>
      </div>
      {patientInfo.map((record, i) => (
        <div className="patients">
          <div className="eachPatient">
            <p className="patientName">{patientName}</p>
            <p className="desease">{record.details}</p>
            <div className="treatmentState">Treating</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyPatients;
