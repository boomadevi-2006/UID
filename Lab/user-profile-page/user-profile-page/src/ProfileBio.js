// src/ProfileBio.js
import React from 'react';

const ProfileBio = ({ bio }) => {
  return (
    <div className="profile-bio">
      <h2>About Me</h2>
      <p>{bio}</p>
      <small className="muted">Tip: You can customize this bio in src/userData.js</small>
    </div>
  );
};

export default ProfileBio;
