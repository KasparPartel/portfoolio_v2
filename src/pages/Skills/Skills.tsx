import styles from "./Skills.module.css";

import iconJavascript from "../../assets/images/icon_javascript.svg";
import iconReact from "../../assets/images/icon_react.svg";
import iconGolang from "../../assets/images/icon_golang.svg";
import iconHTML from "../../assets/images/icon_html-five.svg";
import iconCSS from "../../assets/images/icon_css3.svg";
import iconSASS from "../../assets/images/icon_sass.svg";
import iconGit from "../../assets/images/icon_git.svg";
import iconSQL from "../../assets/images/icon_sql.svg";
import iconVSCode from "../../assets/images/icon_vscode.svg";

interface SkillsGridItemProps {
  text: string;
  img: string;
  alt: string;
}

const SkillsGridItem = ({ text, img, alt }: SkillsGridItemProps) => {
  return (
    <div className={styles.grid_item}>
      <img src={img} alt={alt} className={styles.icon} />
      <p>{text}</p>
    </div>
  );
};

const SkillsGrid = () => {
  return (
    <div className={styles.skills_grid}>
      <SkillsGridItem
        text="Javascript"
        img={iconJavascript}
        alt="javascript icon"
      />
      <SkillsGridItem text="React" img={iconReact} alt="react icon" />
      <SkillsGridItem text="Golang" img={iconGolang} alt="golang icon" />
      <SkillsGridItem text="HTML" img={iconHTML} alt="html icon" />
      <SkillsGridItem text="CSS" img={iconCSS} alt="css icon" />
      <SkillsGridItem text="SASS" img={iconSASS} alt="sass icon" />
      <SkillsGridItem text="Git" img={iconGit} alt="git icon" />
      <SkillsGridItem text="SQL" img={iconSQL} alt="sql icon" />
      <SkillsGridItem text="VSCode" img={iconVSCode} alt="vscode icon" />
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <h2>My Skills</h2>

      <SkillsGrid />
    </section>
  );
};

export default Skills;
