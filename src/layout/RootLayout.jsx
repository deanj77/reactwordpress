import React from "react";
import Footer from "../components/Footer";

const RootLayout = ({ children }) => {
  return (
    <div className="flex flex-col ">
      <div className="min-h-screen">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
