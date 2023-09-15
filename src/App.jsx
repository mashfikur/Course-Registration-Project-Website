import { useState } from "react";
import "./App.css";
import Courses from "./components/Courses";
import Sidebar from "./components/Sidebar";

function App() {
  const [courseList, setCourseList] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [remainingCreditHour, setremainingCreditHour] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState(0);

  const alreadyTaken = [];
  const newCourseList = [];

  const handleSelect = (course) => {
    const newArray = [...courseList, course];
    newArray.map((course) => {
      if (!alreadyTaken.includes(course.id)) {
        newCourseList.push(course);
        alreadyTaken.push(course.id);
      } else {
        setError((error) => error + 1);
      }
    });

    setCourseList(newCourseList);

    const credit = course.credit_hour;
    const totalCredit = credit + creditHour;
    setCreditHour(totalCredit);

    const remainigCredit = remainingCreditHour - credit;

    setremainingCreditHour(remainigCredit);

    const newTotalPrice = totalPrice + course.price;
    setTotalPrice(newTotalPrice);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">
        Course Registration
      </h1>

      <div className="container my-10 mx-auto flex justify-between">
        <Courses handleSelect={handleSelect}></Courses>
        <Sidebar
          courseList={courseList}
          creditHour={creditHour}
          remainingCreditHour={remainingCreditHour}
          totalPrice={totalPrice}
          error={error}
        ></Sidebar>
      </div>
    </div>
  );
}

export default App;
