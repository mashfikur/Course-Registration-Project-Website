import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Sidebar = ({ courseList, error }) => {
  useEffect(() => {
    if (error) {
      toast.error("Course Already Taken");
    }
  }, [error]);

  let displayTotalCredit = 0;
  let displayRemainingCredit = 20;
  let dislayTotalPrice = 0;

  courseList.map((course) => {
    displayTotalCredit += course.credit_hour;
    displayRemainingCredit -= course.credit_hour;
    if (displayTotalCredit <= 20) {
      dislayTotalPrice += course.price;
    }
  });

  const [lastCreditAmount, setLastCreditAmount] = useState(0);
  const [lastReaminingCreditAmount, setLastRemainingCrAmount] = useState(0);

  useEffect(() => {
    if (displayRemainingCredit >= 0) {
      setLastRemainingCrAmount(displayRemainingCredit);
    }
  }, [displayRemainingCredit]);

  useEffect(() => {
    if (displayTotalCredit <= 20) {
      setLastCreditAmount(displayTotalCredit);
    }
  }, [displayTotalCredit]);

  return (
    <div className="w-1/4 bg-white h-full p-6 rounded-lg space-y-4 sticky top-2">
      <h3 className="text-[#2F80ED] text-[1.125rem] font-bold">
        Credit Hour Remaining{" "}
        {displayRemainingCredit >= 0
          ? displayRemainingCredit
          : lastReaminingCreditAmount}
        hr
      </h3>

      <Toaster></Toaster>

      <hr />

      <h3 className=" text-[1.25rem] font-bold">Course Name</h3>
      <div>
        <ol className="list-decimal ml-4 text-[#1c1b1b99]">
          {courseList.map((course, idx) => {
            if (displayTotalCredit <= 20) {
              return <li key={idx}> {course.course_name} </li>;
            }
          })}
        </ol>
      </div>

      <hr />

      <h4 className="font-medium">
        Total Credit Hour :{" "}
        {displayTotalCredit <= 20 ? displayTotalCredit : lastCreditAmount}{" "}
      </h4>
      <hr />
      <h4 className="font-semibold">Total Price : {dislayTotalPrice} USD </h4>
    </div>
  );
};

Sidebar.propTypes = {
  courseList: PropTypes.array,
  error: PropTypes.number,
};

export default Sidebar;
