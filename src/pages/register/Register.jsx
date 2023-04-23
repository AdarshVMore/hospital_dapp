import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../../components/signin/Signin";
import Verify from "../../components/verify/Verify";

function Register({ contract, account }) {
  return (
    <div className="bg-green-200">
      <Routes>
        <Route
          path="/"
          element={<Signin contract={contract} account={account} />}
        />
        {/* <Route
          path="/verify"
          element={<Verify contract={contract} account={account} />}
        /> */}
      </Routes>
    </div>
  );
}

export default Register;
