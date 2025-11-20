import React, { useContext, useState } from "react";
import { LmsContext } from "../LmsContext";

const FacultyRegister = () => {
  const { addFaculty } = useContext(LmsContext);

  const [form, setForm] = useState({
    id: "",
    facultyName: "",
    department: "",
    email: "",
    phone: "",
    qualification: "",
  });

  function handleSubmit() {
    addFaculty(form);
    alert("Faculty Registered!");
  }

  return (
    <div>
      <h3>Register Faculty</h3>

      {Object.keys(form).map((key) => (
        <input
          key={key}
          placeholder={key}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          style={{ display: "block", margin: "10px" }}
        />
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FacultyRegister;
