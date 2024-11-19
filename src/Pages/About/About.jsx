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
        {/* About Us Section */}
        <div className="flex flex-col items-center justify-center sm:pt-[15%] pt-[55%] w-full h-full p-6 sm:px-8 md:px-10 lg:px-12">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-transparent bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text my-8"
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
                className="my-4 leading-relaxed"
              >
                <div>{data.text1}</div>
                <div>{data.text2}</div>
              </motion.p>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section className="bg-slate-950 py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center py-4"
          >
            <p className="text-white text-xl sm:text-2xl md:text-3xl">Why Choose Us</p>
          </motion.div>
          <div className="flex flex-col sm:flex-row w-full px-6 sm:px-12">
            <div className="w-full sm:w-[35%] px-4">
              {Whychoose.map((data, i) => (
                <div key={i} className="mt-6">
                  <ul>
                    {data.points.map((point, j) => (
                      <li key={j} className="flex items-center gap-3 text-white my-3">
                        <img className="w-5 h-5" src={Star} alt="Star" />
                        <span>{point.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="w-full sm:w-[65%] text-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {Whychoose.map((data, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-6">
                    {data.divpoint.map((point, j) => (
                      <div key={j} className="bg-gray-800 rounded-lg p-4 shadow-md">
                        <p className="font-semibold text-lg">{point.head}</p>
                        <p className="mt-2 text-sm">{point.text}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </LampContainer>
  );
}
