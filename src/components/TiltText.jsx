import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const TiltText = () => {
  const containerRef = useRef(null);

  // Motion values for tracking mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;

    // Get div's size and position
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();

    // Calculate mouse position relative to the div center
    const x = event.clientX - (left + width / 2);
    const y = event.clientY - (top + height / 2);

    // Smoothly animate motion values
    animate(mouseX, x, { type: "spring", stiffness: 100, damping: 15 });
    animate(mouseY, y, { type: "spring", stiffness: 100, damping: 15 });
  };

  // Smooth 3D rotation effects:
  const rotateX = useTransform(mouseY, [-200, 0, 200], [25, 0, -25]);
  const rotateY = useTransform(mouseX, [-200, 0, 200], [-25, 0, 25]);
  const rotateZ = useTransform(mouseX, [-200, 0, 200], [-10, 0, 10]);

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="inline-block  pt-10"
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        rotateZ,
      }}
      transition={{
        type: "spring",
        stiffness: 80, // Controls how "stiff" the movement is
        damping: 10, // Reduces sudden stops
        duration: 1, // Smooth transition duration
      }}
    >
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[6vw] sm:leading-[5vw] md:leading-[4vw]">
        I AM{" "}
        <span className="text-black">
          DARK MODE<sup className="text-white">TM</sup>
        </span>
      </h1>
      <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[9vw] sm:leading-[8vw] md:leading-[7vw]">
        DESIGNER
      </h1>
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[6vw] sm:leading-[5vw] md:leading-[4vw]">
        TO HIRE
      </h1>
    </motion.div>
  );
};

export default TiltText;
