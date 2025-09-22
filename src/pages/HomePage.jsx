import React from "react";
import Header from "../components/Header";
import Homepage from "../HompageComp/Homepage";
import Footer from "../components/Footer";
import DynamicHeader from "../components/DynamicHeader";

const HomePage = () => {
  return (
    <div>
      <DynamicHeader />
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
};

export default HomePage;
