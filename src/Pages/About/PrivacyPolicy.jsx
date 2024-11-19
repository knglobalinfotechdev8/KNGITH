import React from 'react'
import { motion } from "framer-motion";
import { LampContainer } from '../../Components/ui/lamp'
import { Privacy } from '../../Constant';

const PrivacyPolicy = () => {
  return (
    <>
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
              className="mt-2 sm:bg-gradient-to-br from-slate-300 to-slate-500 bg-white py-4 bg-clip-text text-center text-3xl sm:font-medium font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Privacy Policy
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-[12%] sm:bg-gradient-to-br from-slate-300 to-slate-500 bg-white py-4 bg-clip-text tracking-tight"
            >
              {Privacy.map((data, i) => (
                <div
                  className={`flex mb-6 ${i % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} ${i % 2 === 0 ? 'flex-col' : 'flex-col'
                    }`}
                  key={i}
                >
                  <div className={`w-full lg:w-1/2 ${i % 2 === 0 ? 'lg:pl-4' : 'lg:pr-4'}`}>
                    <img src={data.img} alt="" className="w-full h-auto rounded-md" />
                  </div>
                  <div className={`text-white w-full lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-4' : 'lg:pl-4'}`}>
                    <h1 className="text-2xl font-semibold">{data.title}</h1>
                    <br />
                    <p>{data.content}</p>
                    <br />
                  </div>
                </div>
              ))}

            </motion.h1>
          </div>
        </section>

      </LampContainer>

    </>
  )
}

export default PrivacyPolicy