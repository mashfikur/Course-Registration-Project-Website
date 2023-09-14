import { FiDollarSign } from "react-icons/fi";
import { GoBook } from "react-icons/go";

const Course = () => {
  return (
    <>
      <div>
        <div>
          <img src="https://i.ibb.co/cbVNFzg/course-3.png" alt="course-image" />
        </div>

        <div>
          <h3 className="text-xl font-semibold">course title</h3>
          <p className="text-[#1c1b1b99]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            fugit, ipsum asperiores vero sunt impedit!
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <FiDollarSign></FiDollarSign>
              <p className="font-medium text-[#1c1b1b99]">Price:20000</p>
            </div>
            <div className="flex items-center gap-3">
              <GoBook></GoBook>
              <p className="font-medium text-[#1c1b1b99]">Credit : 1hr</p>
            </div>
          </div>
          <div>
            <button className="bg-[#2F80ED] text-white text-[1.125rem] font-semibold py-2 px-28 rounded-md">Select</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
