"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../../Components/ui/lamp";
import { Aboutus, Whychoose } from "../../Constant";
import { Star } from "../../Assets/data";

export function About() {
  return (
    <LampContainer>
      <section>
      <div className="flex flex-col items-center justify-center sm:pt-[15%] pt-[55%] w-full h-full p-6 sm:px-8 md:px-10 lg:px-12">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 sm:bg-gradient-to-br from-slate-300 to-slate-500 bg-white py-4 bg-clip-text text-center text-3xl sm:font-medium font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          About Us
        </motion.h1>
        <div className="text-white text-justify indent-10 my-4">
          {Aboutus.map((data, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + i * 0.1,
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="my-2 flex flex-col gap-8"
            >
              <div className="leading-7">{data.text1}</div>
              <div className="leading-7">{data.text2}</div>
            </motion.p>
          ))}
        </div>
      </div>
      </section>
      <section>
      <div className="bg-slate-950">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center py-4"
        >
          <p className="text-white text-xl mt-[20%] sm:text-2xl md:text-3xl">
            Why Choose Us
          </p>
        </motion.div>
        <div className="flex flex-col sm:flex-row w-full px-[3%]">
          <div className="w-full sm:w-[35%] px-2">
            {Whychoose.map((data, i) => (
              <div key={i}>
                <ul className="mt-5">
                  {data.points.map((point, j) => (
                    <div className="flex items-center gap-2" key={j}>
                      <span>
                        <img className="mt-5" src={Star} alt="" />
                      </span>
                      <li className="text-white text-start mt-5">{point.text}</li>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="w-full sm:w-[65%] text-white">
            <div className="h-fit w-fi">
              {Whychoose.map((data, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:gap-10 m-0 gap-0">
                  {data.divpoint.map((point, j) => (
                    <div className="e-card playing" key={j}>
                      <div className="image"></div>
                      <div className="wave"></div>
                      <div className="wave"></div>
                      <div className="wave"></div>
                        <div className="infotop">
                        <p className="font-extrabold text-[21px]">{point.head}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon"></svg>
                        <p className="text-justify px-3">{point.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>
    </LampContainer>
  );
}
