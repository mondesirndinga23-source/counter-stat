const Profile = ({ person }) => {
  const { fullName, bio, imgSrc, profession } = person;

  return (
    <article className="person-card">
      <img className="person-image" src={imgSrc} alt={`Portrait of ${fullName}`} />
      <div className="person-details">
        <h2>{fullName}</h2>
        <p className="person-profession">
          <strong>Profession:</strong> {profession}
        </p>
        <p className="person-bio">
          <strong>Bio:</strong> {bio}
        </p>
      </div>
    </article>
  );
};

export default Profile;