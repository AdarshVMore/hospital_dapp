import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import NotFound from "./pages/not-found/NotFound";
import Hospital from "./abis/Hospital.json";
import { ethers } from "ethers";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState("");
  const [provider, setProvider] = useState("");
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0xb6F7B1e92fE2cC6CCC729b175d57258b905bb7B9";

        const contract = new ethers.Contract(
          contractAddress,
          Hospital.abi,
          signer
        );

        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={<Home contract={contract} account={account} />}
          />
          <Route
            path="/register/*"
            element={<Register contract={contract} account={account} />}
          />
          <Route
            path="/admin/*"
            element={<Admin contract={contract} account={account} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
