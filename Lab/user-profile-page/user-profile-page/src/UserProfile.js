// src/UserProfile.js
import React from 'react';
import ProfileCard from './ProfileCard';
import ProfileBio from './ProfileBio';
import { user } from './userData';

const UserProfile = () => {
  const { name, email, age, location, bio } = user;

  return (
    <div>
      <ProfileCard
        name={name}
        email={email}
        age={age}
        location={location}
      />
      <ProfileBio bio={bio} />
    </div>
  );
};

export default UserProfile;
