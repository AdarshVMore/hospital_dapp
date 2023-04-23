import React, { useState, useEffect } from "react";
import AllRecords from "../allRecords/AllRecords";
import MyPatients from "../myPatients/MyPatients";
import Access from "../access/Access";

function MainContainer({ contract, account }) {
  const [btnBgc, setBtnBgc] = useState(0);
  const [isDoc, setIsDoc] = useState(false);

  useEffect(() => {
    const getDoctorList = async () => {
      const docList = await contract.get_doctor_list();
      for (let i = 0; i < docList.length; i++) {
        let docAccount = docList[i];
        if (docAccount === account) {
          setIsDoc(true);
          // console.log(isDoc);
          // console.log(docAccount);
          break;
        }
      }
    };

    getDoctorList();
  }, [contract, account]);

  return (
    <div className="nav2-Maincontainer">
      <div className="nav2">
        {isDoc ? (
          <>
            <button
              className={btnBgc === 0 ? "btnBgc" : ""}
              onClick={() => {
                setBtnBgc(0);
              }}
            >
              Patient
            </button>
            <button
              className={btnBgc === 1 ? "btnBgc" : ""}
              onClick={() => {
                setBtnBgc(1);
              }}
            >
              My Patient
            </button>
          </>
        ) : (
          <>
            <button
              className={btnBgc === 0 ? "btnBgc" : ""}
              onClick={() => {
                setBtnBgc(0);
              }}
            >
              My Records
            </button>
            <button
              className={btnBgc === 2 ? "btnBgc" : ""}
              onClick={() => {
                setBtnBgc(2);
              }}
            >
              Access
            </button>
          </>
        )}
      </div>
      <div className="mainContainer">
        {btnBgc === 0 ? (
          <AllRecords contract={contract} isDoc={isDoc} account={account} />
        ) : (
          ""
        )}
        {btnBgc === 1 ? (
          <MyPatients contract={contract} account={account} />
        ) : (
          ""
        )}
        {btnBgc === 2 ? <Access contract={contract} account={account} /> : ""}
      </div>
    </div>
  );
}

export default MainContainer;
