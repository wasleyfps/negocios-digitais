"use client";

import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";
const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });
  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* Desktop Version */}
      <div className="container">
        <div className="n-container">
          {/* left side */}
          <div className="n-logo">
            <span>WASLEY</span>
          </div>

          {/* right side */}
          <div className="n-right">
            <div className="n-menu">
              <Link to="wwd-wrapper" spy={true} smooth="true">
              <span>O que fazemos</span>
              </Link>
              <Link to="hiw-wrapper" spy smooth offset={100}>
              <span>Como funciona</span>
              </Link>
              <Link to="wwi-wrapper" spy smooth offset={100}>
              <span>Em quem investimos</span>
              </Link>
              <Link to="t-wrapper" spy smooth offset={100}>
              <span>Depoimentos</span>
              </Link>
            </div>
            <div className="fund-button">Login</div>
          </div>
        </div>
      </div>

      {/* Mobile/tab Version */}
      <div className="nm-container">
        {/* Logo */}
        <span>WASLEY</span>
        {/* Menu Icon */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        {/* Mobile Menu */}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          <Link onClick={() => setMobileMenuOpened(false)}
          to="wwd-wrapper"
          spy={true}
          smooth={true}
          >
          <span>O que fazemos</span>
          </Link>       
          <Link onClick={() => setMobileMenuOpened(false)}
          to="hiw-wrapper"
          spy={true}
          smooth={true}
          >
          <span>Como funciona</span>
          </Link>
          <Link onClick={() => setMobileMenuOpened(false)}
          to="wwi-wrapper"
          spy={true}
          smooth={true}
          >
          <span>Em quem investimos</span>
          </Link>       
          <Link onClick={() => setMobileMenuOpened(false)}
          to="t-wrapper"
          spy={true}
          smooth={true}
          >
          <span>Depoimentos</span>
          </Link>
          <div className="m-funded-button">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
