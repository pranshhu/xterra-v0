"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Background from "/public/robot/f17.png";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src={Background}
          fill
          priority
          alt="image"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <div className="absolute inset-0 flex flex-col items-center justify-start text-center p-4 pt-16 sm:pt-20 md:pt-24">
        <div className="p-10 sm:p-6 md:p-8 rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <h1 className="text-5xl sm:text-5xl md:text-5xl lg:text-5xl font-semibold font-poppins mt-8 sm:mt-4 md:mt-4 lg:mt-4 mb-2 sm:mb-3 text-black">
            COBOT C1
          </h1>
          <p className="text-base sm:text-base md:text-lg lg:text-xl font-light mt-4 sm:mt-3 md:mt-4 text-black">
            Revolutionize Automation with Precision and Efficiency
          </p>
        </div>
      </div>
    </div>
  );
}