import React from "react";
import AdminHome from "../../components/adminHome/AdminHome";

function Admin({ contract, account }) {
  return (
    <div>
      <AdminHome contract={contract} account={account} />
    </div>
  );
}

export default Admin;
