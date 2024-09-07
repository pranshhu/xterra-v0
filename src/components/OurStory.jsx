import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import HomeTestimonials from "./miregoWebsite/HomeTestimonials";

function OurStory() {
  const logos = [
    { src: "/images/companylogo/Ansys.svg", alt: "Company 1" },
    { src: "/images/companylogo/cadfem.svg", alt: "Company 1" },
    { src: "/images/companylogo/eta.png", alt: "Company 1" },
    { src: "/images/companylogo/google.png", alt: "Company 1" },
    { src: "/images/companylogo/iitk.png", alt: "Company 1" },
    { src: "/images/companylogo/nvidia.png", alt: "Company 1" },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      {/* <div className="flex flex-col items-center pt-24 sm:pt-32 md:pt-40 lg:pt-48 bg-white">
        <div className="w-full max-w-6xl text-center px-4">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-tight font-almirego text-[#050307] mb-8">
            Our Story
            <br />
            An Indian Deep-Tech Robotics Startup
          </div>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-light font-almirego text-[#050307] mb-16">
            xTerra is an Indian Deep-Tech Robotics Startup, founded by a team of
            highly skilled and passionate engineers. Incubated at IIT Kanpur and
            spun off from the Mobile Robotics Laboratory at IIT Kanpur, we are
            committed to solving complex locomotion challenges with world-class
            solutions.
          </div>
        </div>
      </div> */}
      <div className="flex flex-col items-center pt-24 sm:pt-32 md:pt-40 lg:pt-48 bg-white">
        <div className="w-full max-w-6xl text-center px-4">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-tight font-almirego text-[#050307] mb-8">
            Our Industry Collaborations
          </div>
          <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className="w-1/3 sm:w-1/6 flex justify-center items-center"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={60}
                      objectFit="contain"
                      className="max-w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center pt-24 sm:pt-32 md:pt-40 lg:pt-48 bg-white">
        <div className="w-full max-w-6xl text-center px-4">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-tight font-almirego text-[#050307] mb-8">
          Building the Future of Robotics 
          </div>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-light font-almirego text-[#050307] mb-16">
            At xTerra, we are not
            just building robots; we are shaping the future. Our commitment to
            AI-driven innovation and first principles thinking positions us at
            the forefront of the robotics industry, driving progress and
            advancing technology for a better tomorrow.
          </div>
        </div>
      </div> */}
      {/* <HomeTestimonials /> */}
      <div className="-mt-20"></div>
      <div className="flex flex-col py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 items-center px-4 sm:px-6 md:px-8">
        <div className="w-full sm:w-11/12 md:w-5/6 lg:w-3/4 flex flex-col">
          <div className="text-[#808080] text-base sm:text-lg md:text-xl lg:text-[20px] font-almirego pb-6 sm:pb-8 md:pb-10 lg:pb-12">
            Let's collaborate
          </div>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed font-normal font-almirego text-[#101820] space-y-4">
            Let's start with{" "}
            <input
              type="text"
              placeholder="your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="inline-block text-xl sm:text-2xl md:text-3xl text-[#888888] opacity-80 bg-transparent border-b-2 border-[#888888] focus:outline-none focus:border-[#101820] transition-colors duration-300 w-40 sm:w-48 md:w-56 lg:w-64"
            />{" "}
            and{" "}
            <input
              type="email"
              placeholder="your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="inline-block text-xl sm:text-2xl md:text-3xl text-[#888888] opacity-80 bg-transparent border-b-2 border-[#888888] focus:outline-none focus:border-[#101820] transition-colors duration-300 w-64 sm:w-72 md:w-80 lg:w-96"
            />{" "}
            .<br />
            Share your ideas{" "}
            <input
              type="message"
              placeholder="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="inline-block text-xl sm:text-2xl md:text-3xl text-[#888888] opacity-80 bg-transparent border-b-2 border-[#888888] focus:outline-none focus:border-[#101820] transition-colors duration-300 w-64 sm:w-72 md:w-80 lg:w-96"
            />{" "}
            .{" "}
          </div>
          <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 border-b-2"></div>
          <div className="flex mt-4 sm:mt-6 md:mt-8 justify-between items-baseline w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            <div className="flex gap-4 sm:gap-6 md:gap-8 text-xl sm:text-2xl md:text-3xl font-almirego font-normal">
              {/* Social icons can be added here */}
            </div>
            <button className="px-3 py-2 sm:px-4 sm:py-3 md:p-4 text-xl sm:text-2xl md:text-3xl text-white font-almirego font-normal rounded-xl bg-[#101820] hover:bg-[#2c3e50] transition-colors duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStory;