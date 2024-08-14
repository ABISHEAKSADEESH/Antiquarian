// ProfilePage.js
import React from 'react';
import './Profile.css';
import profileImage from '../Home/profile.jpg';

const Profile = () => {
  return (
    <div className="main">
    <div className="profile-container">
      <div className="profile-header">
      <img src={profileImage} alt="Profile" className="profile-image" />
        <h1 className="profile-name">Ajain</h1>
        <p className="profile-bio">A brief bio about yourself.</p>
      </div>
      
      <div className="profile-details">
        <h2>About Me</h2>
        <p>Details about your profession, skills, or hobbies.</p>
        
        <h2>Contact Information</h2>
        <p>Email:ajain@example.com</p>
        <p>Phone: +919360536715</p>
      </div>
      
      <div className="profile-footer">
        
      </div>
    </div>
    </div>
  );
};

export default Profile;
