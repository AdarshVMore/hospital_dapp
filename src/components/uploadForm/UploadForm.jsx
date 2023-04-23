import React, { useState, useEffect, useRef } from "react";
import "./uploadForm.css";
import { NFTStorage, Blob } from "nft.storage";
import { PAddressRef } from "../topNav/TopNav";

function UploadForm({ contract, account }) {
  const PatientAddress = useRef();
  const [DoctorName, setDoctorName] = useState("");
  const symptomRef = useRef(null);
  const diagnosisRef = useRef(null);
  const treatmentRef = useRef(null);
  const medicationRef = useRef(null);
  const diseaseRef = useRef(null);
  const NFT_STORAGE_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGY3ODMyQTkyZjgzMzYwRDYyNmQwNkU2MjAzOEM4NDkyNWEyYUIwRDciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4MDQxNTYxNDg1MywibmFtZSI6Imhvc3BpdGFsLWRhcHAifQ.jwamWRhXby27Er2UsaoxSqikdZRSQSlB39CCR9c4S7Y";
  const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });
  const [selectedFile, setSelectedFile] = useState(null);
  const [ReportCID, setReportCID] = useState(null);
  const [billCID, setbillCID] = useState(null);

  let reportCid;
  let billCid;

  function savePrevData() {
    symptomRef = document.getElementsByClassName("symp").value;
    diagnosisRef = document.getElementsByClassName("diag").value;
    diseaseRef = document.getElementsByClassName("dise").value;
  }

  const getReportFile = async (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const someData = new Blob([selectedFile]);
    billCid = await client.storeBlob(someData);
    console.log(billCid);
    setbillCID(billCid.toString());
  };

  const getBillFile = async (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const someData = new Blob([selectedFile]);
    reportCid = await client.storeBlob(someData);
    console.log(reportCid);
    setReportCID(reportCid.toString());
  };

  const addRecord = async (e) => {
    e.preventDefault();

    console.log(
      PatientAddress.current.value,
      DoctorName,
      symptomRef.current.value,
      diagnosisRef.current.value,
      treatmentRef.current.value,
      medicationRef.current.value,
      diseaseRef.current.value,
      ReportCID,
      billCID
    );

    const addingRecord = await contract.add_record(
      PatientAddress.current.value,
      DoctorName,
      symptomRef.current.value,
      diagnosisRef.current.value,
      treatmentRef.current.value,
      medicationRef.current.value,
      diseaseRef.current.value,
      ReportCID,
      billCID
    );

    console.log(addingRecord);
    alert("Record has been added");
  };

  useEffect(() => {
    const getDocName = async () => {
      const doctor = await contract.get_doctor(account);
      setDoctorName(doctor[0]);
    };

    getDocName();
  }, [contract]);
  return (
    <div className="uploadForm">
      <div className="form">
        <form action="">
          <div className="form-top">
            <div className="form-left">
              <div className="disease">
                <label htmlFor="">Patient's Address</label>
                <input className="dise" type="disease" ref={PatientAddress} />
              </div>
              <div className="symptoms">
                <label htmlFor="symptoms">Symptoms :</label>
                <textarea className="symp" name="" ref={symptomRef}></textarea>
              </div>
              <div className="diagnosis">
                <label htmlFor="">Diagnosis : </label>
                <textarea
                  className="diag"
                  name=""
                  ref={diagnosisRef}
                ></textarea>
              </div>
              <div className="testReports">
                <label htmlFor="">Test Reports :</label>
                <input type="file" name="report" onChange={getReportFile} />
              </div>
            </div>

            <div className="form-right">
              <div className="disease">
                <label htmlFor="">Disease</label>
                <input className="dise" type="disease" ref={diseaseRef} />
              </div>
              <div className="treatment">
                <label htmlFor="symptoms">Treatment :</label>
                <textarea type="text" ref={treatmentRef} />
              </div>
              <div className="medication">
                <label htmlFor="">Medication : </label>
                <textarea type="text" ref={medicationRef} />
              </div>
              <div className="bills">
                <label htmlFor="">Bills :</label>
                <input type="file" name="bill" onChange={getBillFile} />
              </div>
            </div>
          </div>
          <div className="btns">
            <button className="addRecord-btn" onClick={addRecord}>
              Add Record
            </button>
            <button>Start Treatment</button>
          </div>
        </form>
        <div className="img"></div>
      </div>
    </div>
  );
}

export default UploadForm;
