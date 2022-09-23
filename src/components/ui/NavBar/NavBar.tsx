import { useState } from "react";
// import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";
import { Squeeze as Hamburger, Squeeze } from "hamburger-react";

import styles from "./Navbar.module.css";

import { IconContext } from "react-icons";
import SwitchIcon from "../../../assets/images/switch-off-outline.svg";

interface TopNavProps {
  isNavOpen: boolean;
  setIsNavOpen: (e: boolean) => void;
}

const TopNav = ({ isNavOpen, setIsNavOpen }: TopNavProps) => {
  return (
    <div className={styles.items}>
      <img className={styles.icon} src={SwitchIcon} alt="Theme switch icon" />
      <IconContext.Provider
        value={{
          size: "1.7em",
          className: styles.icon,
        }}
      >
        {/* {isNavOpen ? (
          <HiOutlineX onClick={() => setIsNavOpen(!isNavOpen)} />
        ) : (
          <HiMenuAlt4 onClick={() => setIsNavOpen(!isNavOpen)} />
        )} */}
        <Squeeze
          size={32}
          toggled={isNavOpen}
          toggle={() => setIsNavOpen(!isNavOpen)}
        />
      </IconContext.Provider>
    </div>
  );
};

const SideNav = () => {
  return (
    <div className={styles.nav__open}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#work">Work</a>
        </li>
        <li>
          <a href="#contact-me">Contact Me</a>
        </li>
      </ul>
    </div>
  );
};

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <TopNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      {isNavOpen && <SideNav />}
    </nav>
  );
};

export default NavBar;
