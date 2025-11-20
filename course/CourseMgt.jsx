import React from "react";
import { Link, Outlet } from "react-router-dom";

const CourseMgt = () => {
  return (
    <div>
      <h2>Course Management</h2>

      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <Link to="CR">Register Course</Link>
        <Link to="Clist">Course List</Link>
        <Link to="Cdetails">Course Details</Link>
        <Link to="Cdelete">Delete Course</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default CourseMgt;
