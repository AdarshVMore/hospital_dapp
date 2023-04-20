import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../../components/signin/Signin";
import Verify from "../../components/verify/Verify";

function Register() {
  return (
    <div className="bg-green-200">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </div>
  );
}

export default Register;
