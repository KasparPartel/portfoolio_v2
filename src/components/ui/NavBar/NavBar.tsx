import { useState } from "react";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";

import navStyles from "./Navbar.module.css";

import { IconContext } from "react-icons";
import SwitchIcon from "../../../assets/images/switch-off-outline.svg";

interface TopNavProps {
  isNavOpen: boolean;
  setIsNavOpen: (e: boolean) => void;
}

const TopNav = ({ isNavOpen, setIsNavOpen }: TopNavProps) => {
  return (
    <div className={navStyles.items}>
      <img
        className={navStyles.icon}
        src={SwitchIcon}
        alt="Theme switch icon"
      />
      <IconContext.Provider
        value={{
          size: "1.7em",
          className: navStyles.icon,
        }}
      >
        {isNavOpen ? (
          <HiOutlineX onClick={() => setIsNavOpen(!isNavOpen)} />
        ) : (
          <HiMenuAlt4 onClick={() => setIsNavOpen(!isNavOpen)} />
        )}
      </IconContext.Provider>
    </div>
  );
};

const SideNav = () => {
  return (
    <div className={navStyles.nav__open}>
      <a href="#home">Home</a>
      <a href="#about-me">About Me</a>
      <a href="#skills">Skills</a>
      <a href="#work">Work</a>
      <a href="#contact-me">Contact Me</a>
    </div>
  );
};

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className={navStyles.nav}>
      <TopNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      {isNavOpen && <SideNav />}
    </nav>
  );
};

export default NavBar;
