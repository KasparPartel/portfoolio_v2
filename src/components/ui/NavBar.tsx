// import "./navbar.module.css";
import navStyles from "./navbar.module.css";

import { IconContext } from "react-icons";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdOutlineDarkMode } from "react-icons/md";

const NavBar = () => {
  return (
    <div className={navStyles.container}>
      <IconContext.Provider value={{ size: "1.5em" }}>
        <MdOutlineDarkMode />
        <HiMenuAlt4 />
      </IconContext.Provider>
    </div>
  );
};

export default NavBar;
