import React from "react";
import "./verify.css";

function Verify({ contract, account, add_doctor }) {
  return (
    <div className="verify">
      <form action="/">
        <input type="file" className="file-input" required />
        <div className="aboutYou">
          <p>About You</p>
          <textarea name="" id="" cols="30" rows="10" required></textarea>
        </div>
        <div className="eduBackground">
          <p>Education Background</p>
          <textarea name="" id="" cols="30" rows="10" required></textarea>
        </div>
        <input
          type="text"
          placeholder="Hospital / Clinic Address"
          className="HCAddress"
          required
        />
        <input type="file" className="file-input" name="" id="" required />
        <button onClick={add_doctor}>Verify</button>
      </form>
    </div>
  );
}
export default Verify;
