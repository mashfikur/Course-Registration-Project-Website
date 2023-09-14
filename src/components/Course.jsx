import { FiDollarSign } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import PropTypes from "prop-types";

const Course = ({ course }) => {
  const { course_name, course_details, course_img, credit_hour, price } =course;
    
  return (
    <>
      <div>
        <div>
          <img src={course_img} alt="course-image" />
        </div>

        <div>
          <h3 className="text-xl font-semibold">{course_name}</h3>
          <p className="text-[#1c1b1b99]">{course_details}</p>
          <div className="flex items-center gap-4">
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
          <div>
            <button className="bg-[#2F80ED] text-white text-[1.125rem] font-semibold py-2 px-28 rounded-md">
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
