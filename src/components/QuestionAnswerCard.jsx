import React, { useState } from "react";
import { motion } from "framer-motion";
import { TbHandClick } from "react-icons/tb";

const QuestionAnswerCard = ({ card }) => {
  const [flip, setFlip] = useState(false);
  return (
    <div
      className="h-[50vh] 2xl:h-[75vh] w-[60vw] overflow-hidden [perspective:_1000vmax] absolute"
      onClick={() => setFlip(!flip)}
    >
      <motion.div
        initial={{ rotateY: 180 }}
        transition={{ duration: 0.7, animationDirection: "normal" }}
        animate={{ rotateY: flip ? 180 : 360 }}
        className="bg-white w-full h-full rounded-3xl [transform-style:_preserve-3d] relative"
      >
        <div className="flex flex-col items-center justify-evenly w-full h-full [backface-visibility:_hidden] absolute">
          <h2 className="text-[4vmin] 2xl:text-[5vmin] font-normal text-center">{card.q}</h2>
          <p className="flex items-center gap-[2vmin]">
            <TbHandClick className="size-[1.5vmax] inline-block" />
            <span className="text-[2.2vmin] font-semibold inline-block">
              Tap to reveal the answer
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center w-full h-full [backface-visibility:_hidden] absolute [transform:_rotateY(180deg)]">
          <img
            src={`/${card.isrc}`}
            alt="answer"
            className="max-h-fit self-stretch m-[0.6vmin]"
          />
          <p className="text-[3vmin] 2xl:text-[4vmin] my-[1vmin] font-medium">{card.a}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default QuestionAnswerCard;
