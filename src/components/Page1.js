import React from 'react';
import { useDispatch } from 'react-redux';

function Page1({ navigateToChatbot }) {
  const dispatch = useDispatch();

  const handleEnrollClick = () => {
    navigateToChatbot();
  };

  return (
    <div>
      <h1>Enter into Student Info System</h1>
      <button onClick={handleEnrollClick}>Enroll Now!</button>
    </div>
  );
}

export default Page1;
