import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import {
  navLinks,
  navLinkItem,
  navLinkText,
  menu,
  burger,
  origNav,
  bars,
} from "./navbar.module.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked((prev) => !prev);
    console.log("clicked");
  };
  return (
    <>
      <header>
        <h2>Jonathan Groger - Licensed Massage Therapist</h2>

        <nav className={origNav}>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
                About
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/services" className={navLinkText}>
                Services
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/contact" className={navLinkText}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {clicked ? (
          <>
            {" "}
            <div className={menu}>
              <button type="button" onClick={clickHandler}>
                {" "}
                <FaTimes className={bars} />
              </button>
            </div>
            <nav className={burger}>
              <ul className={navLinks}>
                <li className={navLinkItem}>
                  <Link to="/" className={navLinkText} onClick={clickHandler}>
                    Home
                  </Link>
                </li>
                <li className={navLinkItem}>
                  <Link
                    to="/about"
                    className={navLinkText}
                    onClick={clickHandler}
                  >
                    About
                  </Link>
                </li>
                <li className={navLinkItem}>
                  <Link
                    to="/services"
                    className={navLinkText}
                    onClick={clickHandler}
                  >
                    Services
                  </Link>
                </li>
                <li className={navLinkItem}>
                  <Link
                    to="/contact"
                    className={navLinkText}
                    onClick={clickHandler}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        ) : (
          <div className={menu}>
            {" "}
            <button type="button" onClick={clickHandler}>
              {" "}
              <FaBars className={bars} />
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
