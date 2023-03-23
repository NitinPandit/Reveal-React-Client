import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import ViewDashboard from "./Components/ViewDashboard";
import {Route,Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateDashboards from "./Components/CreateDashboards";

function App() {

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/create" Component={CreateDashboards}/>
        <Route path="/view" Component={ViewDashboard}/>
        <Route path="/" Component={ViewDashboard}/>
      </Routes>
    </div>
  );
}

export default App;
