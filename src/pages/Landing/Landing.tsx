import programmerDarkImg from "../../assets/images/illustrations/programmer-people-laptop_dark.png";
import wavesSvg from "../../assets/images/wave.svg";
// import circlesSkinnyMd from "../../assets/images/illustrations/circles_outline_skinny_md.svg";
import cv from "../../assets/images/cv.jpeg";

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
                <a href={cv} target="_blank" rel="noreferrer">
                  <Button size="small" outline={true} text="Resumé" />
                </a>

                <a href="#contact-me">
                  <Button size="small" outline={false} text="Get in touch" />
                </a>
              </div>
            </div>
          </div>
          <img
            src={programmerDarkImg}
            alt="profile"
            className={styles.programmer_img}
          />
        </div>
        {/* <img src={circlesSkinnyMd} alt="circles" className={styles.circles} /> */}
      </section>
    </Fragment>
  );
};

export default Landing;
