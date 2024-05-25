import React, { useState } from "react";
import { Link } from "react-scroll";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="nav"
    >
      <div className="nav-links">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={400}
          className="nav-links-item"
        >
          Home
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={400}
          className="nav-links-item"
        >
          About
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={400}
          className="nav-links-item"
        >
          Projects
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={400}
          className="nav-links-item"
        >
          Contact
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
