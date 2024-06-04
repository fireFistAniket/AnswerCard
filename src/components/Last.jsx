import React from "react";
import { IoCheckmark } from "react-icons/io5";
import { TbReload } from "react-icons/tb";

const Last = ({ setIsInitial, setIsEnded }) => {
  function handelRestart() {
    setIsInitial(true);
    setIsEnded(false);
  }
  return (
    <div className="flex flex-col items-center justify-center max-w-[40vmax] gap-[3vmin]">
      <div className="flex items-center justify-center text-[8vmax] border-8 rounded-full text-white border-white p-[8vmin]">
        <IoCheckmark />
      </div>
      <h2 className="text-[3.5vmin] font-semibold text-white">
        Hope you learn something new!
      </h2>
      <button
        type="button"
        className="flex min-w-[9.5vmax] min-h-[3.2vmax] items-center justify-center font-bold text-[1.2vmax] gap-2 rounded-full bg-[#FDF416] text-black outline-none border-none shadow-[0px_0px_30px_0px_#FDF4164D] focus:outline-none focus:border-none group"
        onClick={handelRestart}
      >
        <TbReload className="group-hover:scale-125 transition group-hover:rotate-[360deg] duration-300" />
        <span>Play again</span>
      </button>
    </div>
  );
};

export default Last;
