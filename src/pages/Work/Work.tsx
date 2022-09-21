import workStyles from "./Work.module.css";

import workData from "./data";
import { Button } from "../../components";

interface WorkCardProps {
  image: string;
  header: string;
  description: string;
  technologies: string[];
  live_link?: string;
  repo: string;
}

const WorkCard = ({
  image,
  header,
  description,
  technologies,
  repo,
  live_link,
}: WorkCardProps) => {
  return (
    <div className={workStyles.card}>
      <img src={image} alt="placeholder" />

      <div className={workStyles.text}>
        <h3>{header}</h3>

        <p>{description}</p>

        <p>
          Technologies:{" "}
          {technologies.map((el, index) => (
            <span key={index}>{el} </span>
          ))}
        </p>

        <div className={workStyles.buttons}>
          <a href={repo} target="blank">
            <Button size="small" text="Repo" />
          </a>
          {live_link && (
            <a href={repo} target="blank">
              <Button size="small" text="Live" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <section id="work" className={workStyles.section}>
      <h2>My Work</h2>

      <div className={workStyles.cards}>
        {workData.map((data, index) => (
          <WorkCard
            key={index}
            image={data.image}
            header={data.header}
            description={data.description}
            technologies={data.technologies}
            repo={data.repo}
            live_link={data.live_link}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
