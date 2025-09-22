import React from "react";
import GetStarted from "../auth/GetStarted";
import Glogin from "../components/Glogin";
import Header from "../components/Header";

const GetStartedPage = () => {
  return (
    <div>
      <Header />
      <Glogin />
      <GetStarted />
    </div>
  );
};

export default GetStartedPage;
