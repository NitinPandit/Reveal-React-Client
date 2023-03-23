import React, { useEffect, useState } from "react";
declare let $: any;

const apiURL = "https://localhost:7011/api/dashboard-names";
const ViewDashboard = (props: any) => {

  const [dashboardID, setDashboardId] = useState("Marketing");
  const [dashboardNames, setDashboardNames] = useState([]);

  //-----------This will be invoked on the dropdown's selected value changed and will update the new dashboard id to load----------
  let changeDashboard = (e: any) => {
    setDashboardId(e.target.value);
  };

  useEffect(() => {
    
    fetch(apiURL, { method: "GET" }).then((res: any) => res.json())
    .then((DashboardNames:any)=>{
     setDashboardNames(DashboardNames);
    });

    $.ig.RevealSdkSettings.setBaseUrl("https://localhost:7011/");
    var revealView = new $.ig.RevealView("#revealView");
    $.ig.RVDashboard.loadDashboard(dashboardID).then((dashboard: any) => {
      revealView.dashboard = dashboard;
    });
  }, [dashboardID]);

  return (
    <div className="container m-3">
      <div>
        <h3>Load Dashboard</h3>
        <select
          className="form-control"
          value={dashboardID}
          onChange={changeDashboard}
          placeholder="Select a dashboard name...">

            {dashboardNames.map((dashName,index)=>{
                return <option key={index} value={dashName}>{dashName}</option>
            })};
        </select>
      </div>
      <div id="revealView" style={{ height: "100vh", width: "100%" }}></div>
    </div>
  );
};

export default ViewDashboard;
