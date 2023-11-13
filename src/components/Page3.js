import React from 'react';
import { useSelector } from 'react-redux';

function Page3() {
  const name = useSelector((state) => state.studentInfo.name);
  const age = useSelector((state) => state.studentInfo.age);

  return (
    <div>
      <h2>Your name {name} aged {age} has been added to the student system. You may now exit.</h2>
    </div>
  );
}

export default Page3;
