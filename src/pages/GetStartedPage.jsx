import React from "react";
import GetStarted from "../auth/GetStarted";
import Glogin from "../components/Glogin";
import DynamicHeader from "../components/DynamicHeader";

const GetStartedPage = () => {
  return (
    <div>
      <DynamicHeader />
      <Glogin />
      <GetStarted />
    </div>
  );
};

export default GetStartedPage;
