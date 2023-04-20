import React from "react";
import "./verify.css";

function Verify() {
  return (
    <div className="verify">
      <form action="/">
        <input type="file" className="file-input" />
        <div className="aboutYou">
          <p>About You</p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="eduBackground">
          <p>Education Background</p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <input
          type="text"
          placeholder="Hospital / Clinic Address"
          className="HCAddress"
        />
        <input type="file" className="file-input" name="" id="" />
        <button>Verify</button>
      </form>
    </div>
  );
}
export default Verify;
