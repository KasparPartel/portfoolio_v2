import { BrowserRouter } from "react-router-dom";

import { NavBar } from "./components";
import { Landing } from "./pages";

import styles from "./app.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <NavBar />
        <Landing />
      </div>
    </BrowserRouter>
  );
};

export default App;
