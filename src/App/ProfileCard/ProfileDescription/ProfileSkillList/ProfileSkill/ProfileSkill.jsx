import "./ProfileSkill.css";

function ProfileSkill({ skill, color }) {
  return (
    <div className="skill--item" style={{ background: color }}>
      <p>{skill}</p>
    </div>
  );
}

export default ProfileSkill;
