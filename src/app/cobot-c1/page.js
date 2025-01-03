"use client"
import Footer from '@/components/footer/Footer'
import Description from '@/components/c1/Description';
import Intro from '@/components/c1/Intro';
import Section from '@/components/c1/Section';
import Navbar from '@/components/navbar/Navbar'
import Lenis from "lenis";
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div>
      <Navbar />
      <Intro />
      <Description />
      <Section />
      <div className="container mx-auto p-4 my-8 sm:y-16 md:my-24 lg:my-32">
        <div className="font-poppins text-3xl sm:text-4xl md:text-5xl text-center max-w-5xl mx-auto"> {/* Added text-center and max-width with margin auto */}
          Interested in learning more?
          <br className="hidden sm:inline" />
          Say{' '}
          <Link href="/contact" className="text-[#4E148C] hover:underline cursor-pointer">
            hi
          </Link>
          , and we'll be in touch soon!
        </div>
      </div>
      <Footer />
    </div>
  );
}