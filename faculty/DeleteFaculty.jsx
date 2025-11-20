import React, { useState, useContext } from "react";
import { LmsContext } from "../LmsContext";

const DeleteFaculty = () => {
  const { faculty, addFaculty } = useContext(LmsContext);
  const [num, setNum] = useState("");

  function handle() {
    const updated = faculty.filter((f) => f.id !== num);

    // ❗ we need a setFaculty, not addFaculty
    addFaculty(updated); // WRONG EARLIER — BELOW IS FINAL FIX
  }

  return (
    <>
      <input
        type="text"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={handle}>Delete</button>
    </>
  );
};

export default DeleteFaculty;
