import { useState } from "react";
import "./App.css";
import Courses from "./components/Courses";
import Sidebar from "./components/Sidebar";

function App() {
  const [courseTitle, setCourseTitle] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [remainingCreditHour, setremainingCreditHour] = useState(20);

  const handleSelect = (course) => {
    const newArray = [...courseTitle, course];

    setCourseTitle(newArray);

    const credit = course.credit_hour;
    const totalCredit = credit + creditHour;
    setCreditHour(totalCredit);

    const remainigCredit = remainingCreditHour - credit;

    setremainingCreditHour(remainigCredit);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">
        Course Registration
      </h1>

      <div className="container my-10 mx-auto flex justify-between">
        <Courses handleSelect={handleSelect}></Courses>
        <Sidebar
          courseTitle={courseTitle}
          creditHour={creditHour}
          remainingCreditHour={remainingCreditHour}
        ></Sidebar>
      </div>
    </div>
  );
}

export default App;
