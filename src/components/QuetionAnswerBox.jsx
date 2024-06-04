import React, { useState } from "react";
import QuestionAnswerCard from "./QuestionAnswerCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
  }),
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
  }),
};

const QuetionAnswerBox = ({ setIsEnded, setIsStarted }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const questionData = [
    {
      q: "Eve has 9 apples and she was given 7 more. How many apples does she have now?",
      a: "Eve has 16 apples now (9 + 7 = 16)",
      isrc: "ans-cover-1.png",
    },
    {
      q: "Lucas had 14 candies. He ate 5. How many candies does he have left?",
      a: "Lucas has 9 candies left (14 - 5 = 9)",
      isrc: "ans-cover-2.png",
    },
    {
      q: "There are 11 cats in a room. 6 cats leave. How many cats are left in the room?",
      a: "There are 5 cats left in the room (11 - 6 = 5)",
      isrc: "ans-cover-3.png",
    },
    {
      q: "Tom had 8 pencils, and he finds 6 pencils on the ground. How many pencils does Tom have now? ",
      a: "Tom now has 14 pencils (8 + 6 = 14)",
      isrc: "ans-cover-4.png",
    },
    {
      q: "Maria had 20 cupcakes. She gave 11 cupcakes to her friends. How many cupcakes does Maria have left?",
      a: "Maria has 9 cupcakes left (20 - 11 = 9)",
      isrc: "ans-cover-5.png",
    },
    {
      q: "An aquarium has 7 goldfish and adds 5 more. How many goldfish are in the aquarium now?",
      a: "There are 12 goldfish in the aquarium now (7+5=12)",
      isrc: "ans-cover-6.png",
    },
    {
      q: "Dad bought 10 oranges, and mom bought 6. How many oranges are there in total?",
      a: "There are 16 oranges in total (10 + 6 = 16)",
      isrc: "ans-cover-7.png",
    },
    {
      q: "A box contained 18 apples. 7 apples fell out. How many apples are left in the box?",
      a: "There are 11 apples left in the box (18-7=11)",
      isrc: "ans-cover-8.png",
    },
    {
      q: "Lisa had 12 balloons, and 7 flew away. How many balloons does Rita have now?",
      a: "Rita has 5 balloons now (12-7=5)",
      isrc: "ans-cover-9.png",
    },
    {
      q: "Michael had $15, and his father gave him $5 more. How much money does Michael have now?",
      a: "Michael has $20 now (15+5=20)",
      isrc: "ans-cover-10.png",
    },
  ];

  const paginate = (newDirection) => {
    if (currentIndex === 9) {
      setIsEnded(true);
      setIsStarted(false);
      setPage([0, 0]);
      return;
    }
    setPage([page + newDirection, newDirection]);
  };

  const currentIndex =
    ((page % questionData.length) + questionData.length) % questionData.length;

  return (
    <div className="flex flex-col items-center gap-[6vmin]">
      <div className="flex items-center gap-[2vmin]">
        <h3 className="text-white text-[3vmin]">{currentIndex + 1}/10</h3>
        <div className="flex items-center gap-[1vmin]">
          {questionData.map((_, index) => (
            <span
              className={`w-[0.7vmax] h-[0.7vmax] rounded-full ${
                index === currentIndex
                  ? "bg-white"
                  : "border border-neutral-500"
              } inline-block`}
              key={index}
            ></span>
          ))}
        </div>
      </div>
      <div className="relative px-[10vmin]">
        <div className="overflow-hidden min-w-[60vw] min-h-[50vh] 2xl:min-w-[65vw] 2xl:min-h-[75vh] max-w-[65vw] max-h-[75vh]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 50 },
              }}
            >
              <QuestionAnswerCard card={questionData[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          type="button"
          className="absolute top-1/2 left-0 bg-neutral-400 text-[6vmin] rounded-full p-[1vmin] hover:bg-yellow-400 focus-within:bg-yellow-400"
          onClick={() => paginate(-1)}
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-0 bg-neutral-400 text-[6vmin] rounded-full p-[1vmin] hover:bg-yellow-400 focus-within:bg-yellow-400"
          onClick={() => paginate(1)}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default QuetionAnswerBox;
