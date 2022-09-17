import ProfilePhoto from "../../assets/images/portrait.jpg";
import landingStyles from "./Landing.module.css";

const Landing = () => {
  return (
    <section className={landingStyles.wrapper}>
      <div
        className={landingStyles.profile__img}
        style={{ backgroundImage: `url(${ProfilePhoto})` }}
      ></div>
      <div className="text">
        <h1>
          Software <span>Developer</span>
        </h1>
        <p>
          Passionate about building software that looks good and works well.
        </p>
      </div>
    </section>
  );
};

export default Landing;
