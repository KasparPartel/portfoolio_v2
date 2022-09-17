import ProfilePhoto from "../../assets/images/portrait.jpg";
import landingStyles from "./Landing.module.css";

const Landing = () => {
  return (
    <section className={landingStyles.wrapper}>
      <div
        className={landingStyles.profile__img}
        style={{ backgroundImage: `url(${ProfilePhoto})` }}
      ></div>
      <div className={landingStyles.text}>
        <h1>
          Software <br />
        </h1>
        <div className={landingStyles.content}>
          <h1>Developer</h1>
          <p>
            Passionate about building software that looks good and works well.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
