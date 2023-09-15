import { useState } from "react";
import "./App.css";
import Courses from "./components/Courses";
import Sidebar from "./components/Sidebar";
import toast from "react-hot-toast";

function App() {
  const [courseList, setCourseList] = useState([]);
  const [error, setError] = useState(0);

  const alreadyTaken = [];
  const newCourseList = [];
  let creditCount = 0;

  const handleSelect = (course) => {
    const newArray = [...courseList, course];
    newArray.map((course) => {
      if (!alreadyTaken.includes(course.id)) {
        creditCount += course.credit_hour;
        if (creditCount <= 20) {
          newCourseList.push(course);
        } else {
          toast.error("Credit Hour Limit Exceeded");
        }
        alreadyTaken.push(course.id);
        setCourseList(newCourseList);
      } else {
        setError((error) => error + 1);
      }
    });
  };

  newCourseList.map((course) => console.log(course.credit_hour));

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">
        Course Registration
      </h1>

      <div className="container my-10 mx-auto flex justify-between">
        <Courses handleSelect={handleSelect}></Courses>
        <Sidebar courseList={courseList} error={error}></Sidebar>
      </div>
    </div>
  );
}

export default App;
