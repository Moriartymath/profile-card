import "./ProfileSkillList.css";
import { useEffect, useState } from "react";
import ProfileSkill from "./ProfileSkill/ProfileSkill";

function ProfileSkillList({ profileSkills }) {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    setSkills(() =>
      profileSkills.map(([skill, color], index) => (
        <ProfileSkill skill={skill} color={color} key={index} />
      ))
    );
  }, [profileSkills]);
  return <div className="profile--skill_list">{skills}</div>;
}

export default ProfileSkillList;
