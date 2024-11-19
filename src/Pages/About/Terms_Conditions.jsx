import React from 'react'
import { motion } from "framer-motion";
import { TermsAndConditions } from '../../Constant'
import { LampContainer } from '../../Components/ui/lamp'
import LottieAnimation from '../../AnimationIcons';

const Terms_Conditions = () => {
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
              Terms & Conditions
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 sm:bg-gradient-to-br from-slate-300 to-slate-500 bg-white py-4 bg-clip-text tracking-tight"
            >
              {TermsAndConditions.map((data, i) => {
                return (
                  <>
                    <div>
                      <img src={data.img} alt="" />
                    </div>
                    <div className='text-white'>
                      <div className={`flex ${i % 2 == 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'}`}>
                        <div className='basis-[55%] flex flex-col justify-center'>
                          <h1>{data.title}</h1>
                          <br />
                          <p>{data.content}</p>
                        </div>
                        <div className='basis-[45%] flex justify-center'>
                          <LottieAnimation animationData={data.vid} loop={true} ClassStyle='w-[42%]' />
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}</motion.h1>
          </div>
        </section>

      </LampContainer>

    </>
  )
}

export default Terms_Conditions