import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navbar-ul">
        <div className="logo">Emojify</div>
        <ul className="nav-link-ul">
          <li className="nav-link">
            <Link href="#" className="link">
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link href="#" className="link">
              About
            </Link>
          </li>
          <li className="nav-link">
            <Link href="#" className="link">
              Github
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
