import React, { useContext } from "react";
import { LmsContext } from "../LmsContext";

const FacultyList = () => {
  const { faculty } = useContext(LmsContext);

  return (
    <table 
      border="1" 
      style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}
    >
      <thead style={{ background: "#0275d8", color: "white" }}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Qualification</th>
        </tr>
      </thead>

      <tbody>
        {faculty.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.facultyName}</td>
            <td>{item.department}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.qualification}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FacultyList;
