import React, { useContext, useState } from "react";
import { LmsContext } from "../LmsContext";

const CourseRegister = () => {
  const { addCourse } = useContext(LmsContext);

  const [form, setForm] = useState({
    id: "",
    courseId: "",
    courseName: "",
    description: "",
    courseDuration: "",
    minEnrollment: "",
    maxEnrollment: ""
  });

  function handleSubmit() {
    addCourse(form);
    alert("Course Registered!");
  }

  return (
    <div>
      <h3>Register Course</h3>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          placeholder={key}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CourseRegister;
