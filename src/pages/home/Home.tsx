import { useEffect, useState } from "react";
import Skill from "../../components/skill/Skill";
import "./home.css";

function Home() {
  const [skills, setSkills] = useState<{ img: String; language: String }[]>([]);

  useEffect(() => {
    fetch("data/skills.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSkills(data);
      });
  }, []);

  return (
    <main id="home-main">
      <div id="profile-card">
        <img src="profile-picture.png" alt="Profile Picture" />
        <div id="profile-text">
          <h1>Hello There!</h1>
          <h2>I am a front-end developer with a degree in Computer Science</h2>
          <a
            id="resume-link"
            href="https://docs.google.com/document/d/1ctwFuZzO8t8hQVjV7E8AkNGchEV_LvuLStRwJ-TeEY0/edit?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
      <div id="skills-card">
        <h1>Skills</h1>
        <ul id="skills-list">
          {skills.map((skill, index) => {
            return (
              <Skill img={skill.img} language={skill.language} key={index} />
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default Home;
