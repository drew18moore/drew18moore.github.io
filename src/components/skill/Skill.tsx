import React from "react"

type SkillProps = {
  img: String,
  language: String
}

const Skill = ({ img, language }: SkillProps) => {
  return (
    <li>
      <img className="skill-img" src={`logos/${img}`} alt={`${language} logo`} />
      <p>{language}</p>
    </li>
  );
}

export default Skill;
