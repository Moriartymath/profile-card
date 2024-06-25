import "./ProfileImage.css";
function ProfileImage({ src }) {
  return (
    <div className="image--container">
      <img src={src} alt="" />
    </div>
  );
}

export default ProfileImage;
