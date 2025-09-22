import React from "react";
import Login from "../auth/Login";
import DynamicHeader from "../components/DynamicHeader";

const LoginPage = () => {
  return (
    <div>
      <DynamicHeader />
      <Hlogin />
      <Login />
    </div>
  );
};

export default LoginPage;
