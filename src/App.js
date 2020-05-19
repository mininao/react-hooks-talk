import React from "react";
import { EditUserAddress } from "./features/editUserAddress/EditUserAddress";
import { EditUserAddressHooks } from "./features/editUserAddress/EditUserAddressHooks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <EditUserAddress></EditUserAddress>
      <EditUserAddressHooks></EditUserAddressHooks>
    </div>
  );
}

export default App;
