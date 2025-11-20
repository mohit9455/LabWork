import { createContext, useState } from "react";

export const LmsContext = createContext();

export function LmsProvider({ children }) {

  const [courses, setCourses] = useState([]);
  const [faculty, setFaculty] = useState([]);

  const addCourse = (newCourse) => setCourses([...courses, newCourse]);
  const addFaculty = (newFaculty) => setFaculty([...faculty, newFaculty]);

  return (
    <LmsContext.Provider value={{ courses, addCourse, faculty, addFaculty }}>
      {children}
    </LmsContext.Provider>
  );
}
