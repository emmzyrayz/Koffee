import React from "react";
import "./header.css";
import Navbar from "../navbar/navbar";
import Banner from "../banner/banner";

const Header = () => {


  return (
    <div className='header_section'>
      <Navbar />
      <Banner />
    </div>
  );
};

export default Header;
