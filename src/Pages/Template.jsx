import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Scrollbars from "react-custom-scrollbars-2";

function Template() {
  return (
    <Scrollbars style={{ height: "100vh", width: "100vw" }}>
      <div className="w-full bg-black">
        <Header />
        <div className="px-4 bg-gray-900">
          <Outlet />
        </div>
        <Footer />
      </div>
    </Scrollbars>
  );
}

export default Template;
