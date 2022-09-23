import ProfilePhoto from "../../assets/images/portrait.jpg";
import vanGoghPortrait from "../../assets/images/van-gogh-portrait-drawing-5359.svg";
import styles from "./Landing.module.css";

import { Button } from "../../components";

const Landing = () => {
  return (
    <section id="home" className={styles.section}>
      {/* <img src={ProfilePhoto} alt="profile" className={styles.profile__img} /> */}
      <img
        src={vanGoghPortrait}
        alt="Van Gogh portrait drawing"
        className={styles.profile__img}
      />
      <div className={styles.text}>
        <h1>
          Software <br />
        </h1>
        <div className={styles.content}>
          <h1>Developer</h1>
          <p>
            Passionate about building software that looks good and works well.
          </p>

          <div className={styles.buttons}>
            <Button
              size="small"
              outline={true}
              text="Resumé"
              onClick={() => console.log("Resumé Button clicked")}
            />
            <Button
              size="small"
              outline={false}
              text="Work"
              onClick={() => console.log("Work Button clicked")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
