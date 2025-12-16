// src/ProfileCard.js
import React from 'react';

const ProfileCard = ({ name, email, age, location }) => {
  return (
    <div className="profile-card">
      <h1>{name}</h1>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

export default ProfileCard;
