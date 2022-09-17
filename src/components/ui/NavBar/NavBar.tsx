import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";

import navStyles from "./navbar.module.css";

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
      <Link to="/#home">Home</Link>
      <Link to="/#about-me">About Me</Link>
      <Link to="/#skills">Skills</Link>
      <Link to="/#projects">Projects</Link>
      <Link to="/#contact-me">Contact Me</Link>
    </div>
  );
};

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav>
      <TopNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      {isNavOpen ? <SideNav /> : null}
    </nav>
  );
};

export default NavBar;
