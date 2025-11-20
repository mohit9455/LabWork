import React, { useContext } from "react";
import { LmsContext } from "../LmsContext";

const CourseList = () => {
  const { courses } = useContext(LmsContext);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Course Name</th>
          <th>Course ID</th>
          <th>Description</th>
          <th>Duration</th>
          <th>Min Enrollment</th>
          <th>Max Enrollment</th>
        </tr>
      </thead>

      <tbody>
        {courses.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.courseName}</td>
            <td>{item.courseId}</td>
            <td>{item.description}</td>
            <td>{item.courseDuration}</td>
            <td>{item.minEnrollment}</td>
            <td>{item.maxEnrollment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseList;
