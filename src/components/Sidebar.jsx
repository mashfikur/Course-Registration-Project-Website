const Sidebar = () => {
  return (
    <div className="w-1/4 bg-white h-full p-6 rounded-md space-y-4 sticky top-2">
      <h3 className="text-[#2F80ED] text-[1.125rem] font-bold">
        Credit Hour Remaining 7 hr
      </h3>

      <hr />

      <h3 className=" text-[1.25rem] font-bold">Course Name</h3>

      <div>
        <ol className="list-decimal ml-4 text-[#1c1b1b99]">
          <li>Introduction to c programming</li>
        </ol>
      </div>

      <hr />

      <h4 className="font-medium">Total Credit Hour : 13 </h4>
      <hr />
      <h4 className="font-semibold">Total Price : 48000 USD </h4>
    </div>
  );
};

export default Sidebar;
