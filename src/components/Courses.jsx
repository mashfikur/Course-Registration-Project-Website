import { useEffect, useState } from "react";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="w-3/4">
      <Course></Course>
    </div>
  );
};

export default Courses;
