import React from "react";
import { Link, Outlet } from "react-router-dom";

const FacultyMgt = () => {
  return (
    <div>
      <h2>Faculty Management</h2>

      <nav
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "20px",
          padding: "10px",
          background: "#f0f0f0",
          borderRadius: "8px",
        }}
      >
        <Link to="FR">Register Faculty</Link>
        <Link to="Flist">Faculty List</Link>
        <Link to="Fprofile">Faculty Profile</Link>
        <Link to="Fdelete">Delete Faculty</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default FacultyMgt;
