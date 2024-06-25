import "./ProfileDescription.css";
import ProfileSkillList from "./ProfileSkillList/ProfileSkillList";
import ProfileText from "./ProfileText/ProfileText";
import ProfileTitle from "./ProfileTitle/ProfileTitle";

function ProfileDescription({ profileTitle, profileText, profileSkills }) {
  return (
    <div className="profile--description">
      <ProfileTitle profileTitle={profileTitle} />
      <ProfileText profileText={profileText} />
      <ProfileSkillList profileSkills={profileSkills} />
    </div>
  );
}

export default ProfileDescription;
