import React from "react";
import { FaRegPlayCircle } from "react-icons/fa";

const Initial = ({ setIsStarted, setIsInitial }) => {
  function handelStart() {
    setIsInitial(false);
    setIsStarted(true);
  }
  return (
    <div className="flex flex-col items-center justify-center max-w-[40vmax] gap-[3vmin]">
      <h1 className="font-bold text-[5.5vmin] text-center text-white">
        Addition and Subtraction Facts within 20
      </h1>
      <p className="font-medium text-[2.22vmin] text-center text-white">
        Test your knowledge with the following questions, tap a card to flip it
        and uncover the answer, good luck!
      </p>
      <button
        type="button"
        className="flex min-w-[9.5vmax] min-h-[3.2vmax] items-center justify-center font-bold text-[1.2vmax] gap-2 rounded-full bg-[#FDF416] text-black outline-none border-none shadow-[0px_0px_30px_0px_#FDF4164D] focus:outline-none focus:border-none group"
        onClick={handelStart}
      >
        <FaRegPlayCircle className="group-hover:scale-125 transition group-hover:rotate-[360deg] duration-300" />
        <span>Let&apos;s play</span>
      </button>
    </div>
  );
};

export default Initial;
