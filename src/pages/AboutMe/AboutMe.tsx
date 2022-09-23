import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section id="about-me" className={styles.section}>
      <h2>About Me</h2>
      <div className={styles.flex}>
        <p>
          My name is Kaspar Johannes Pärtel. I am a junior software engineer
          from Estonia interested in every part of development cycle. Right now
          I am studying in Kood/Jõhvi school of computer science where my
          interest and knowledge towards the topic has grown tremendously.
        </p>
        <p>
          Besides coding my main interests are different sports (muay thai, gym,
          discgolf), reading and DJing.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
