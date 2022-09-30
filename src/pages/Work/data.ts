import realTimeForumPng from "../../assets/images/real-time-forum_600x400.png";
import bombermanPng from "../../assets/images/bomberman_600x400.png";
import chaikinPng from "../../assets/images/chaikin_600x400.png"

class WorkCard {
  image: string;
  header: string;
  description: string;
  technologies: string[];
  live_link?: string;
  repo: string;

  constructor(image:string, header:string, description: string, technologies:string[], repo: string, live_link?: string) {
    this.image = image;
    this.header = header;
    this.description = description;
    this.technologies = technologies;
    this.repo = repo;

    if (live_link !== undefined) {
      this.live_link = live_link;
    }
  }
}

const RealTimeForum = new WorkCard(realTimeForumPng, "Real Time Forum", "Forum with posting, commenting and real time chat. Users who are not registered can only see posts and comments but can’t create them.", ["Golang", "React", "Websockets", "REST API"], "https://github.com/KasparPartel/Forum");

const Bomberman = new WorkCard(bombermanPng, "Bomberman", "Bomberman game with board generation, simple AI enemies and bomb placement running in browser.", ["Javascript", "HTML", "CSS"], "https://github.com/KasparPartel/Bomberman");

const Chaikins = new WorkCard(chaikinPng, "Chaikin's curves algorithm", "Program that generates curves from polygon using Chaikin’s curves algorithm.", ["Rust"], "https://github.com/KasparPartel/Curves-algorithm");

const workData = [
  RealTimeForum, Bomberman, Chaikins
]

export default workData;