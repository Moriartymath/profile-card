import "./ProfileCard.css";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import ProfileImage from "./ProfileImage/ProfileImage";

function ProfileCard() {
  const profileImage = "logo512.png";
  const profileTitle = "Illia Strelia";
  const profileText =
    "Full-stack web developer, with 6 month of non-comercial experience and plenty of personal projects";
  const profileSkills = [
    { skill: "JavaScript", level: "advanced", color: "yellow" },
    { skill: "TypeScript", level: "advanced", color: "green" },
    { skill: "React", level: "beginner", color: "blue" },
    { skill: "HTML/HTML5", level: "advanced", color: "lightgreen" },
    { skill: "CSS/CSS3", level: "advanced", color: "lightblue" },
    { skill: "WEB development", level: "intermediate", color: "red" },
  ];
  return (
    <div className="profile_card">
      <ProfileImage src={profileImage} />
      <ProfileDescription
        profileTitle={profileTitle}
        profileText={profileText}
        profileSkills={profileSkills}
      />
    </div>
  );
}

export default ProfileCard;
