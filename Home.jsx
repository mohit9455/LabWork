import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>LMS Portal</h1>

      <Link to="/course">Go To Course Management</Link> <br />
      <Link to="/faculty">Go To Faculty Management</Link>
    </div>
  );
};

export default Home;
