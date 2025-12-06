import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navbar-ul">
        <div className="logo">Emojify</div>
        <ul className="nav-link-ul">
          <li className="nav-link">
            <Link href="/" className="link">
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link href="/about" className="link">
              About
            </Link>
          </li>
          <li className="nav-link">
            <Link href="https://github.com/mspassov/emojify" className="link">
              <div className="github">Github</div>
              <FaGithub className="github-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
