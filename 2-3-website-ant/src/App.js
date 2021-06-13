import React from "react";
import "./index.css";
import MainSite from "./pages/MainSite.js";

//I guess this will have LoginPage only

//index > App > LoginPage > LogForm > Mainsite > otherpages & Logout> LoginPage

const App = () => (
  <div className="App">
    <MainSite />
  </div>
);

export default App;
