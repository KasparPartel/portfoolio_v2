import { BrowserRouter } from "react-router-dom";

import { NavBar } from "./components";
import { AboutMe, ContactMe, Landing, Skills, Work, Footer } from "./pages";

import styles from "./app.module.css";
import { useEffect } from "react";

const App = () => {
  const loader = document.querySelector(".loader") as HTMLElement;

  useEffect(() => {
    const onPageLoad = () => {
      loader.style.display = "none";
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

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
