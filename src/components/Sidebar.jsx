import PropTypes from "prop-types";

const Sidebar = ({ courseTitle, creditHour, remainingCreditHour }) => {
  return (
    <div className="w-1/4 bg-white h-full p-6 rounded-lg space-y-4 sticky top-2">
      <h3 className="text-[#2F80ED] text-[1.125rem] font-bold">
        Credit Hour Remaining{" "}
        {remainingCreditHour >= 0
          ? remainingCreditHour
          : alert("Credit Hour Limit Exceeded")&&0}
        hr
      </h3>

      <hr />

      <h3 className=" text-[1.25rem] font-bold">Course Name</h3>

      <div>
        <ol className="list-decimal ml-4 text-[#1c1b1b99]">
          {courseTitle.map((course, idx) => (
            <li key={idx}> {course.course_name} </li>
          ))}
        </ol>
      </div>

      <hr />

      <h4 className="font-medium">Total Credit Hour : {creditHour<=20?creditHour:20} </h4>
      <hr />
      <h4 className="font-semibold">Total Price : 48000 USD </h4>
    </div>
  );
};

Sidebar.propTypes = {
  courseTitle: PropTypes.array,
  creditHour: PropTypes.number,
  remainingCreditHour: PropTypes.number,
};

export default Sidebar;
