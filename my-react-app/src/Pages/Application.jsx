import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faGoogle } from '@fortawesome/free-brands-svg-icons'; // Import the Google icon
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase'; // Import the Firebase auth module
import Taprobana from '../Images/Taprobana.png';
import opacity from '../Images/opacity.png';

function Application() {
  // State to store form data and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  
  // Hook to navigate to different routes
  const navigate = useNavigate();

  // Handle input change event
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      // Create a new user with email and password
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log('User registered successfully');
      setError('');
      
      // Navigate to the profile page after successful registration
      navigate('/ProfilePage');
    } catch (error) {
      console.error('Error registering user:', error);
      setError(error.message); // Display error message
    }
  };

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log('User signed in with Google');
      navigate('/'); // Redirect to home or profile page after successful sign-in
    } catch (error) {
      console.error('Error signing in with Google:', error);
      setError(error.message); // Display error message
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Background Image */}
      <img
        src={opacity}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      
      {/* Form Container */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img 
            className="mx-auto h-14 w-auto rounded-full"
            src={Taprobana}
            alt="TAPROBANA TAXI"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create User Account
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <FontAwesomeIcon icon={faGoogle} size="2x" className="mr-2" /> Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Application;
