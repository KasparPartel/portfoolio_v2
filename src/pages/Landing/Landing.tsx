import ProfilePhoto from "../../assets/images/portrait.jpg";
import landingStyles from "./Landing.module.css";

import { Button } from "../../components";

const Landing = () => {
  return (
    <section id="home" className={landingStyles.section}>
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

          <div className={landingStyles.buttons}>
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
