import React from 'react';
import { Redirect } from 'react-router-dom';

const MainPage = ({ isLoggedIn }) => {
  // If user is not authenticated, redirect to login page
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  // Otherwise, render the main page content
  return (
    <div className="main-page">
      <h1>Welcome to the Main Page!</h1>
      {/* Add your main page content here */}
    </div>
  );
};

export default MainPage;
