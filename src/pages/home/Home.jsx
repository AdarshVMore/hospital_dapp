import React, { useEffect, useState } from "react";
import TopNav from "../../components/topNav/TopNav";
import Nav2 from "../../components/Nav2/Nav2";
import MainContainer from "../../components/mainContainer/MainContainer";
import DocProfile from "../../components/docProfile/DocProfile";
import UplodForm from "../../components/uploadForm/UploadForm";

import { Routes, Route } from "react-router-dom";

function Home({ contract, account }) {
  useEffect(() => {
    const checkLogin = async () => {
      const PList = await contract.get_patient_list();
      console.log(PList);
      const DList = await contract.get_doctor_list();
      console.log(DList);

      for (let i = 0; i < PList.length; i++) {
        if (account !== PList[i]) {
          window.location.href = "/register";
          alert("You have not registered yet");
        }
      }

      for (let i = 0; i < DList.length; i++) {
        if (account !== DList[i]) {
          window.location.href = "/register";
          alert("You have not registered yet");
        }
      }
    };
    checkLogin();
  });

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
