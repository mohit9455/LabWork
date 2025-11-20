import React, { useContext, useState } from 'react';
import { LmsContext } from '../LmsContext';

const DeleteCourse = () => {
  const { courses, addCourse } = useContext(LmsContext);
  const [num, setNum] = useState("");

  function handle() {
    const updated = courses.filter(c => c.courseId !== num);
    addCourse(updated); // WRONG earlier → fixed below
  }

  return (
    <>
      <input value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={handle}>Delete</button>
    </>
  );
};

export default DeleteCourse;
