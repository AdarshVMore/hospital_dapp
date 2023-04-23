import React, { useState, useEffect, useRef } from "react";
import "./topNav.css";
export let PAddressRef = "";

function TopNav({ contract, account }) {
  PAddressRef = useRef();
  const [isDoc, setIsDoc] = useState(false);
  const [haveAccess, setHaveAccess] = useState(!isDoc);

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

  const access = async () => {
    const list = await contract.get_accessed_doctorlist_for_patient(
      PAddressRef.current.value
    );
    for (let i = 0; i < list.length; i++) {
      if (account === list[i]) {
        setHaveAccess(true);
      } else {
        setHaveAccess(false);
      }
    }
    console.log(list);
    console.log(haveAccess);
  };
  return (
    <div className="topNav">
      <div className="left">
        <form action="">
          {isDoc ? (
            <>
              <input
                type="text"
                placeholder="Enter Wallet Address"
                className="search"
                ref={PAddressRef}
                onChange={() => {
                  access();
                }}
              />
            </>
          ) : null}
        </form>
      </div>
      <div className="right">
        <p className="address">{account}</p>
        <div className="profile"></div>
      </div>
    </div>
  );
}

export default TopNav;
