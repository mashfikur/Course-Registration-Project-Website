import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Sidebar = ({
  courseList,
  creditHour,
  remainingCreditHour,
  totalPrice,
  error,
}) => {
  useEffect(() => {
    if (error > 0) {
      toast.error("Course Already Taken");
    }
  }, [error]);

  const [lastAmount, setLastAmount] = useState(creditHour);
  useEffect(() => {
    if (creditHour > 20) {
      setLastAmount(20);
    } else {
      setLastAmount(creditHour);
    }
  }, [creditHour]);

  return (
    <div className="w-1/4 bg-white h-full p-6 rounded-lg space-y-4 sticky top-2">
      <h3 className="text-[#2F80ED] text-[1.125rem] font-bold">
        Credit Hour Remaining{" "}
        {remainingCreditHour >= 0
          ? remainingCreditHour
          : toast.error("Credit Hour Limit Exceeded") && 0}
        hr
      </h3>
      <Toaster></Toaster>
      <hr />

      <h3 className=" text-[1.25rem] font-bold">Course Name</h3>

      <div>
        <ol className="list-decimal ml-4 text-[#1c1b1b99]">
          {courseList.map((course, idx) => {
            return <li key={idx}> {course.course_name} </li>;
          })}
        </ol>
      </div>

      <hr />

      <h4 className="font-medium">Total Credit Hour : {lastAmount} </h4>
      <hr />
      <h4 className="font-semibold">Total Price : {totalPrice} USD </h4>
    </div>
  );
};

Sidebar.propTypes = {
  courseList: PropTypes.array,
  creditHour: PropTypes.number,
  remainingCreditHour: PropTypes.number,
  totalPrice: PropTypes.number,
  error: PropTypes.number,
};

export default Sidebar;
