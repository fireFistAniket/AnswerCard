import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import Initial from "./components/Initial";
import Last from "./components/Last";
import QuetionAnswerBox from "./components/QuetionAnswerBox";

function App() {
  const [isInitial, setIsInitial] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  return (
    <motion.main
      className="bg-[url('/bg-image.png')] bg-no-repeat min-h-screen bg-center w-svw"
      animate={!isStarted ? { backgroundSize: ["100%", "120%", "100%"] } : null}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    >
      <div className="min-w-full min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-between bg-black bg-opacity-60 min-w-full min-h-screen">
          <Navbar />
          {isInitial && (
            <Initial setIsStarted={setIsStarted} setIsInitial={setIsInitial} />
          )}
          {isStarted && (
            <QuetionAnswerBox
              setIsStarted={setIsStarted}
              setIsEnded={setIsEnded}
            />
          )}

          {isEnded && (
            <Last setIsInitial={setIsInitial} setIsEnded={setIsEnded} />
          )}

          <Footer />
        </div>
      </div>
    </motion.main>
  );
}

export default App;
