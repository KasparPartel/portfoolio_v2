import { BrowserRouter } from "react-router-dom";

import { NavBar } from "./components";
import { AboutMe, Landing, Skills, Work } from "./pages";

import styles from "./app.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <NavBar />
        <Landing />
        <AboutMe />
        <Skills />
        <Work />
      </div>
    </BrowserRouter>
  );
};

export default App;
