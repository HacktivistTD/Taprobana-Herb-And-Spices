// src/pages/ProfilePage.js
import React from 'react';
import CommentSection from '../components/CommentSection';
import useAuth from '../hooks/useAuth'; // Import your custom authentication hook

const ProfilePage = () => {
  const { user } = useAuth(); // Custom hook to get current user

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">User Profile</h1>
      {user && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Welcome, {user.displayName}</h2>
          <CommentSection userId={user.uid} />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
