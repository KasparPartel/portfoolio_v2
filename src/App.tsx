import { BrowserRouter } from "react-router-dom";

import { NavBar } from "./components";
import { AboutMe, ContactMe, Landing, Skills, Work, Footer } from "./pages";

import styles from "./app.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <main>
          <NavBar />
          <Landing />
          <AboutMe />
          <Skills />
          <Work />
          <ContactMe />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
