// import ProfilePhoto from "../../assets/images/portrait.jpg";
// import vanGoghPortrait from "../../assets/images/van-gogh-portrait-drawing-5359.svg";
// import programmerImg from "../../assets/images/illustrations/designer-studio-modern-flat.png";
import programmerDarkImg from "../../assets/images/illustrations/programmer-people-laptop_dark.png";
import wavesSvg from "../../assets/images/wave.svg";
import circlesSkinnyMd from "../../assets/images/illustrations/circles_outline_skinny_md.svg";
import lineSpiralSvg from "../../assets/images/illustrations/line_spiral.svg";

import styles from "./Landing.module.css";

import { Button } from "../../components";
import { Fragment } from "react";

const Landing = () => {
  return (
    <Fragment>
      <section id="home" className={styles.section}>
        <div className={styles.trim}>
          <img src={wavesSvg} alt="Wave" className={styles.wave}></img>
        </div>
        <div className={styles.grid}>
          <div className={styles.text}>
            <h1>
              Software <br />
            </h1>
            <div className={styles.content}>
              <h1>Developer</h1>
              <p>
                Passionate about building software that looks good and works
                well.
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
          <img
            src={programmerDarkImg}
            alt="profile"
            className={styles.programmer_img}
          />
        </div>
        <img src={circlesSkinnyMd} alt="circles" className={styles.circles} />
        {/* <img
          src={lineSpiralSvg}
          alt="circles"
          className={styles["line-spiral"]}
        /> */}
      </section>
    </Fragment>
  );
};

export default Landing;
