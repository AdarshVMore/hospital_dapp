import React, { useEffect, useState } from "react";
import TopNav from "../../components/topNav/TopNav";
import Nav2 from "../../components/Nav2/Nav2";
import MainContainer from "../../components/mainContainer/MainContainer";
import DocProfile from "../../components/docProfile/DocProfile";
import UplodForm from "../../components/uploadForm/UploadForm";

import { Routes, Route } from "react-router-dom";

function Home({ contract, account }) {
  const [gotToReg, setGoToReg] = useState(false);
  const [loggedIn, setLoggedIn] = useState(1);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const PList = await contract.get_patient_list();
      console.log(PList);
      const DList = await contract.get_doctor_list();
      console.log(DList);
      const AdminList = await contract.get_admin_list();
      console.log(AdminList);

      for (let i = 0; i < AdminList.length; i++) {
        if (account === AdminList[i]) {
          setIsAdmin(true);
          window.location.href = "/admin";
        }
      }

      for (let i = 0; i < PList.length; i++) {
        if (account === PList[i]) {
          console.log("he is a patient");
        } else {
          for (let i = 0; i < DList.length; i++) {
            if (account === DList[i]) {
              console.log("he is a doctor");
              setLoggedIn(1);
            } else {
              console.log("he has not logged in");
              setLoggedIn(0);
            }
          }
        }
      }

      console.log(gotToReg);
    };

    checkLogin();
  }, [account]);

  useEffect(() => {
    if (loggedIn === 0 && !isAdmin) {
      window.location.href = "/register";
    }
  }, [loggedIn]);

  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <TopNav contract={contract} account={account} />{" "}
              <Nav2 contract={contract} account={account} />{" "}
              <MainContainer contract={contract} account={account} />
            </>
          }
        />
        <Route
          path="upload"
          element={
            <>
              <TopNav contract={contract} account={account} />{" "}
              <UplodForm contract={contract} account={account} />
            </>
          }
        />
        <Route
          path="/docProfile"
          element={
            <>
              <DocProfile contract={contract} account={account} />
            </>
          }
        />
        <Route
          path="/eachRecord"
          element={
            <>
              <eachRecord contract={contract} account={account} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default Home;
