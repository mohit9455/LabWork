import React, { useState, useContext } from "react";
import { LmsContext } from "../LmsContext";

const FacultyProfile = () => {
  const { faculty } = useContext(LmsContext);

  const [num, setNum] = useState("");
  const [profile, setProfile] = useState(null);

  function handle() {
    const found = faculty.find((f) => f.id === num);
    setProfile(found || null);
  }

  return (
    <>
      <input
        type="text"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={handle}>Search</button>

      {profile ? (
        <>
          <h1>{profile.id}. {profile.facultyName}</h1>
          <h2>Department: {profile.department}</h2>
          <h2>Email: {profile.email}</h2>
          <h2>Phone: {profile.phone}</h2>
          <h2>Qualification: {profile.qualification}</h2>
        </>
      ) : (
        <h3>No Faculty Found</h3>
      )}
    </>
  );
};

export default FacultyProfile;
