import React from 'react';
import '../styles/TeamMember.css';

const TeamMember = ({ name, role, bio, image }) => {
  return (
    <div className="team-member">
      <img src={image} alt={`${name}`} className="team-member-image" />
      <h2>{name}</h2>
      <p><i>{role}</i></p>
      <p>{bio}</p>
    </div>
  );
};

export default TeamMember;
