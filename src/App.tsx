import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [show, setShow] = useState(false);
  const flipVariants = {
    delete: {
      rotateX: 0,
      backgroundColor: "#ef4444",
      color: "#ffffff",
    },
    cancel: {
      rotateX: 180,
      backgroundColor: "#f4f4f5",
      color: "#18181b",
    },
  };
  return (
    <main className="relative w-full min-h-screen flex items-start md:items-center justify-center px-4 py-10">
      <div className="w-full max-w-[270px]">
        <motion.button
          className="font-medium py-3 px-6 w-full cursor-pointer"
          style={{
            borderRadius: 999,
          }}
          onClick={() => setShow(!show)}
          animate={show ? "cancel" : "delete"}
          variants={flipVariants}
          transition={{ duration: 0.6, type: "spring" }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{ rotateX: show ? 180 : 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {show ? "Cancel" : "Delete"}
          </motion.div>
          <motion.div
            animate={{ rotateX: show ? 0 : -180 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="absolute inset-0"
          ></motion.div>
        </motion.button>
      </div>
    </main>
  );
}
