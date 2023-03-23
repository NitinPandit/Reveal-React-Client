import React, { useEffect } from "react";
declare let $: any;

const CreateDashboards = () => {
  useEffect(() => {

    $.ig.RevealSdkSettings.setBaseUrl("https://localhost:7011/");
    var revealView = new $.ig.RevealView("#revealView");
    revealView.startInEditMode = true;

    //----------Adding the Rest Data source-------------
    revealView.onDataSourcesRequested = (callback: any) => {
      const restDataSource = new $.ig.RVRESTDataSource();
      restDataSource.id = "RestDataSource";
      restDataSource.url =
        "https://excel2json.io/api/share/6e0f06b3-72d3-4fec-7984-08da43f56bb9";
      restDataSource.title = "Sales by Category";
      restDataSource.subtitle = "Excel2Json";
      restDataSource.useAnonymousAuthentication = true;

      callback(new $.ig.RevealDataSources([restDataSource], [], true));
    };
  }, []);

  return <div id="revealView" style={{ height: "100vh", width: "100%" }}></div>;
};

export default CreateDashboards;
