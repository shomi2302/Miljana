import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => (
  <nav className="nav-wrapper">
    <h1>
      <a className="home_link" href="#home">Miljana Nikolic</a>
    </h1>
    <div className="nav-block">
      <Link
        to="bio"
        spy={true}
        smooth={true}
        hashSpy={true}
        duration={1100}
        offset={-100}
        delay={0}
        isDynamic={true}
    
        ignoreCancelEvents={false}
      >
        Biography
      </Link>
      <Link
        to="work"
        spy={true}
        smooth={true}
        hashSpy={true}
        duration={1100}        
        delay={0}
        isDynamic={true}
        ignoreCancelEvents={false}
      >
        Works
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-800}
        duration={2500}
        delay={0}
        isDynamic={true}
        ignoreCancelEvents={false}
      >
        Contact
      </Link>
    </div>
  </nav>
);

export default Navbar;
