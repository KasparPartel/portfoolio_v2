import styles from "./Skills.module.css";

interface SkillsGridItemProps {
  text: string;
  image?: string;
}

const SkillsGridItem = ({ text }: SkillsGridItemProps) => {
  return (
    <div className={styles.grid_item}>
      <img src="https://via.placeholder.com/66" alt="placholder" />
      <p>{text}</p>
    </div>
  );
};

const SkillsGrid = () => {
  return (
    <div className={styles.skills_grid}>
      <SkillsGridItem text="Javascript" />
      <SkillsGridItem text="React" />
      <SkillsGridItem text="Golang" />
      <SkillsGridItem text="HTML" />
      <SkillsGridItem text="CSS" />
      <SkillsGridItem text="SASS" />
      <SkillsGridItem text="Git" />
      <SkillsGridItem text="SQL" />
      <SkillsGridItem text="VSCode" />
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
