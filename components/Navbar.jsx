import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navbar-ul">
        <div className="logo">Emojify</div>
        <div className="nav-link-ul">
          <div className="nav-link">Home</div>
          <div className="nav-link">About</div>
          <div className="nav-link">Github</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
