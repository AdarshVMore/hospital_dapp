import React, { useState, useEffect, useRef } from "react";
import "./access.css";

function Access({ contract, account }) {
  const [accessList, setAccessList] = useState([]);
  const [docNames, setDocNames] = useState([]);
  const accessAddressRef = useRef(null);
  const givingAccess = async (e) => {
    console.log(accessAddressRef.current.value);
    const access = await contract.permit_access(accessAddressRef.current.value);
    await access.wait();
    console.log("access given");
    alert("Access given  , u can reload pg to see ur access list");
  };

  useEffect(() => {
    const getAccessList = async () => {
      const list = await contract.get_accessed_doctorlist_for_patient(account);
      setAccessList(list);
      for (let i = 0; i < accessList.length; i++) {
        const name = await contract.get_doctor(accessList[i]);

        setDocNames(name[0]);
        console.log(docNames);
      }
      // console.log(list);
    };

    getAccessList();
  }, [contract, account]);

  return (
    <div className="access">
      <div className="top">
        <input type="text" ref={accessAddressRef} />
        <button onClick={givingAccess}>Give Access</button>
      </div>
      {accessList.map((item, index) => (
        <>
          {item === "0x0000000000000000000000000000000000000000" ? null : (
            <div className="accessList">
              <div className="eachAccess">
                <p className="docName">Dr. {docNames}</p>
                <p className="address" key={index}>
                  {item}
                </p>
                <button
                  onClick={async (e) => {
                    await contract.revoke_access(item);
                    const newList = [...accessList];
                    newList.splice(index, 1);
                    setAccessList(newList);
                    console.log(newList);
                    alert("Access have been revoked");
                  }}
                  key={index}
                >
                  Revoke
                </button>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
}

export default Access;
