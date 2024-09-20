'use client'

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import image from '@/Public/man-wearing-glasses-orange-hoodie-is-sitting-front-laptop_1103290-135968.jpg'
import Image from "next/image";


const HeroSection = () => {
  return (
    <section className="lg:py-16">
        <div className="xl:flex justify-between">
           <motion.div
              initial = {{ opacity: 0, scale: 0.5 }}
              animate = {{ opacity: 1, scale: 1   }}
              transition = {{ duration: 1 }}
              className=" cols-span-8  place-self-center sm:text-left text-center jusrify-self-start"
           >
           <h1 className="text-white mb-4 text-3xl lg:text-6xl lg:leading-normal font-extrabold">
             <span className=" text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to bg-blue-400">
                Hello, I&apos;m{" "}
             </span>
             <br></br>
             <TypeAnimation 
               sequence={[
                "Oluwabukunmi",
                1000,
                "Frontend Developer",
                1000,
                "Mobile Developer",
                1000,
               ]}
               wrapper="span"
               speed={50}
               repeat={Infinity}
             />            
           </h1>
           <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">I&apos;m a software developer based in Nigeria</p>
           <div >
              <Link 
                  href="/#contact"
                  className="px-6 text-center font-bold inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-primary-400 to bg-blue-400 hover:bg-slate-200 text-white"
                >
                 Hire me 
              </Link>
              <Link 
                  href="/"
                  className="px-1 my-2 text-center font-bold inline-block py-1 w-full sm:w-fit hover:bg-slate-800 rounded-full mr-4 bg-gradient-to-r from-primary-400 to bg-blue-400 mt-3 text-white"
                >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                   Download CV 
                </span>
              </Link>
           </div>
           </motion.div>
           
           <motion.div
              initial = {{ opacity: 0, scale: 0.5 }}
              animate = {{ opacity: 1, scale: 1   }}
              transition = {{ duration: 1 }}
              className="cols-span-4 place-self-center mt-4 lg-mt-0"
           >
             <div>
                <Image 
                  alt="img"
                  src={image}
                  className="w-[30rem] rounded-full"
                />
             </div>
           </motion.div>
           
        </div>
        
    </section>
  );
}

export default HeroSection;