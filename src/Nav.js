import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://raw.githubusercontent.com/CleverProgrammers/pwj-netflix-clone/master/assets/logo.png"
        alt="Netflix logo"
      />

      <img
        className="nav__avatar"
        src="https://raw.githubusercontent.com/CleverProgrammers/pwj-netflix-clone/master/assets/profile__logo.png"
        alt="Netflix logo"
      />
    </div>
  );
}

export default Nav;
