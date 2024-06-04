import React, { useState } from "react";
import { SlVolume2, SlVolumeOff } from "react-icons/sl";

const Navbar = () => {
  const [isVolumeOn, setIsVolumeOn] = useState(false);
  const [bgAudio, setBgAudio] = useState(new Audio("/bg-tune.mp3"));

  function handelPlay() {
    if (!isVolumeOn) {
      setIsVolumeOn(true);
      bgAudio.play();
    } else {
      setIsVolumeOn(false);
      bgAudio.pause();
    }
  }
  return (
    <div className="flex items-center justify-between px-[2vmin] py-[1vmin] self-stretch">
      <div className="flex items-center gap-[2vmin]">
        <div className="bg-white rounded-full p-[1.2vmin]">
          <img
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
            className="object-contain w-[2vmax] h-[2vmax]"
          />
        </div>
        <div className="flex flex-col items-start gap-[0.2vmin]">
          <h1 className="font-semibold text-white text-[2.2vmin]">
            Cloudifyapp Pvt. Ltd.
          </h1>
          <h2 className="font-medium text-white text-[1.8vmin]">By John Doe</h2>
        </div>
      </div>
      <button
        type="button"
        className="text-[2vmax] text-white flex items-center hover:bg-white hover:bg-opacity-15 rounded-lg p-[1vmin]"
        onClick={handelPlay}
      >
        {isVolumeOn ? <SlVolume2 /> : <SlVolumeOff />}
      </button>
    </div>
  );
};

export default Navbar;
