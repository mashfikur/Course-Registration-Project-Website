import { FiDollarSign } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import PropTypes from "prop-types";

const Course = ({ course }) => {
  const { course_name, course_details, course_img, credit_hour, price } =
    course;

  const displayDetails = course_details.split(" ").slice(0, 20).join(" ");

  return (
    <>
      <div className="w-[22rem] bg-white p-4 rounded-lg">
        <div className="mb-2">
          <img
            className="text-center w-full mx-auto"
            src={course_img}
            alt="course-image"
          />
        </div>

        <div className="">
          <h3 className="text-xl mb-2 font-semibold">{course_name}</h3>
          <p className="text-[#1c1b1b99]">{displayDetails}</p>
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-3">
              <FiDollarSign></FiDollarSign>
              <p className="font-medium text-[#1c1b1b99]">Price:{price}</p>
            </div>
            <div className="flex items-center gap-3">
              <GoBook></GoBook>
              <p className="font-medium text-[#1c1b1b99]">
                Credit : {credit_hour}hr
              </p>
            </div>
          </div>
          <div className="mt-6">
            <button className="bg-[#2F80ED] text-white text-[1.125rem] font-semibold py-2 px-28 rounded-md mx-auto w-full ">
              Select
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Course.propTypes = {
  course: PropTypes.object,
};

export default Course;
