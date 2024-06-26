import "./ProfileSkill.css";

function ProfileSkill({ skill, color, level }) {
  const levelEmoji =
    level === "advanced" ? "💪" : level === "beginner" ? "👶" : "👍";
  return (
    <div className="skill--item" style={{ background: color }}>
      <p>{`${skill} ${levelEmoji}`}</p>
    </div>
  );
}

export default ProfileSkill;
