import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import { LmsProvider } from "./LmsContext";

// Course components
import CourseMgt from "./course/CourseMgt";
import CourseRegister from "./course/CourseRegister";
import CourseList from "./course/CourseList";
import CourseDetails from "./course/CourseDetails";
import DeleteCourse from "./course/DeleteCourse";

// Faculty components
import FacultyMgt from "./faculty/FacultyMgt";
import FacultyRegister from "./faculty/FacultyRegister";
import FacultyList from "./faculty/facultyList";
import FacultyProfile from "./faculty/facultyProfile";
import DeleteFaculty from "./faculty/DeleteFaculty";

function App() {
  return (
    <LmsProvider>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />

          {/* COURSE MANAGEMENT */}
          <Route path="/course" element={<CourseMgt />}>
            <Route path="CR" element={<CourseRegister />} />
            <Route path="Clist" element={<CourseList />} />
            <Route path="Cdetails" element={<CourseDetails />} />
            <Route path="Cdelete" element={<DeleteCourse />} />
          </Route>

          {/* FACULTY MANAGEMENT */}
          <Route path="/faculty" element={<FacultyMgt />}>
            <Route path="FR" element={<FacultyRegister />} />
            <Route path="Flist" element={<FacultyList />} />
            <Route path="Fprofile" element={<FacultyProfile />} />
            <Route path="Fdelete" element={<DeleteFaculty />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </LmsProvider>
  );
}

export default App;
