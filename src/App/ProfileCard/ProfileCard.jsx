import "./ProfileCard.css";
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import ProfileImage from "./ProfileImage/ProfileImage";

function ProfileCard() {
  const profileImage = "logo512.png";
  const profileTitle = "Illia Strelia";
  const profileText = "Full-stack web developer";
  const profileSkills = [
    ["JavaScript", "yellow"],
    ["TypeScript", "green"],
    ["React", "blue"],
    ["HTML/HTML5", "redish"],
    ["CSS/CSS3", "lightblue"],
    ["WEB development", "red"],
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
