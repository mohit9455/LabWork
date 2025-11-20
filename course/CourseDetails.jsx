import React, { useState, useContext } from "react";
import { LmsContext } from "../LmsContext";

const CourseDetails = () => {
  const { courses } = useContext(LmsContext);
  const [num, setNum] = useState("");
  const [course, setCourse] = useState(null);

  function handle() {
    const found = courses.find(c => c.id === num);
    setCourse(found || null);
  }

  return (
    <>
      <input value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={handle}>Search</button>

      {course ? (
        <>
          <h1>{course.courseId}. {course.courseName}</h1>
          <p>{course.description}</p>
        </>
      ) : (
        <h3>No Course found</h3>
      )}
    </>
  );
};

export default CourseDetails;
