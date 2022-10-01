import styles from "./AboutMe.module.css";
import circleSalmon from "../../assets/images/illustrations/circle_salmon_no-outline.svg";

const AboutMe = () => {
  return (
    <section id="about-me" className={styles.section}>
      <h2>About Me</h2>
      <div className={styles.flex}>
        <p>
          My name is <b>Kaspar Johannes Pärtel</b>. I am a 23 years old junior
          software engineer from Estonia interested in every part of development
          cycle. As of this moment I am studying in{" "}
          <a href="https://kood.tech/" target="_blank" rel="noreferrer">
            <b>Kood/Jõhvi</b>
          </a>{" "}
          school of computer science where my interest and knowledge towards the
          topic has grown tremendously.
        </p>
        <p>
          I consider myself a fast learner and a team player. I will take
          responsibilty for my actions and can learn from my mistakes. Because
          my school is built on self-learning methodology (no teachers or
          classes), I have acquired the skill of self-learning and googling to
          finish my projects.
        </p>
        <img src={circleSalmon} alt="big circle" className={styles.circle} />
        <p>
          When I&apos;m not coding I like to be active - I like to practice
          different sports - muay thai, gym and discgolf and do many fun
          activities with my friends and family. Sometimes I also play
          videogames to relax or make music.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
