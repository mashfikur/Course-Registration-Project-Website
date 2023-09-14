import { useEffect, useState } from "react";
import Course from "./Course";
import PropTypes from "prop-types";

const Courses = ({ handleSelect }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="w-3/4 grid grid-cols-3 gap-6">
      {courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          handleSelect={handleSelect}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  handleSelect: PropTypes.func,
};

export default Courses;
