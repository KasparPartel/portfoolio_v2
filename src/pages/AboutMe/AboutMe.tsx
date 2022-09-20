import aboutMeStyles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section id="about-me" className={aboutMeStyles.section}>
      <h2>About Me</h2>
      <p>
        My name is Kaspar Johannes Pärtel. I am a junior software engineer from
        Estonia interested in every part of development cycle. Right now I am
        studying in Kood/Jõhvi school of computer science where my interest and
        knowledge towards the topic has grown tremendously. <br /> <br />
        Besides coding my main interests are different sports (muay thai, gym,
        discgolf), reading and DJing.
      </p>
    </section>
  );
};

export default AboutMe;
