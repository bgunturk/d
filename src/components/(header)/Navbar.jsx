import React from "react";
import Logo from "./Logo";
import Arama from "./Arama";
import AnaMenu from "./AnaMenu";

const Navbar = () => {
  return (
    <div className="navbar">        
      <Arama />
      <Logo />
      <AnaMenu/>
    </div>
  );
};

export default Navbar;
