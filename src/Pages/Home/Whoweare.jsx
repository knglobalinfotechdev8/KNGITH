import React from 'react';
import { WhoWeAre } from '../../Constant';
import { motion } from 'framer-motion';
import LottieAnimation from '../../AnimationIcons';
import { WhoWeImg } from '../../Assets/data';

const Whoweare = () => {
    return (
        <section className="flex py-12 justify-center bg-darkblue-default h-fit w-full px-5 z-10">
            <div className='flex flex-col items-center overflow-hidden justify-center mt-6 border rounded-3xl border-white p-2'>
                <div className='bg-gray-500 px-4 py-2 mt-8 rounded-lg w-fit z-10'>
                    <p className='text-white'>Who we are?</p>
                </div>

                <div className='mt-6'>
                    {WhoWeAre.map((data, i) => {
                        return (
                            <div key={i} className="flex flex-col">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}  // Initial state for header animation
                                    whileInView={{ opacity: 1, y: 0 }} // Final state for header animation
                                    transition={{ duration: 0.5, delay: 0.5 }} // Fixed delay for header
                                    className="flex flex-col items-center justify-center text-center text-white"
                                >
                                    <h1 className="z-10">{data.head}</h1>
                                    {/* Wrap only the paragraph in a motion div for animation */}
                                    <motion.p
                                        className="z-10"
                                        initial={{ opacity: 0, y: 20 }} // Initial state for paragraph animation
                                        whileInView={{ opacity: 1, y: 0 }} // Final state for paragraph animation
                                        transition={{ duration: 0.5, delay: 0.5 }} // Fixed delay for paragraph
                                    >
                                        "{data.text}"
                                    </motion.p>
                                </motion.div>

                                <div className='flex flex-col md:flex-row gap-5 px-5 mt-8'>
                                    <div className='z-10 w-full md:w-1/2'>
                                        {/* <motion.LottieAnimation
                                            className='w-full h-auto md:h-[550px] object-cover'
                                            animationData={WhoWeImg}
                                            initial={{ scale: 0 }}      // Initial state for image animation
                                            whileInView={{ scale: 1 }}  // Final state for image animation
                                            transition={{ duration: 0.5 }} // Transition duration for image
                                        /> */}
                                        <LottieAnimation animationData={WhoWeImg}/>
                                    </div>
                                    <div className='w-full md:w-1/2 flex text-justify'>
                                        <motion.div
                                            initial={{ opacity: 0, x: 100 }} // Start from right (x: 100)
                                            whileInView={{ opacity: 1, x: 0 }} // Final state (move to x: 0)
                                            transition={{ duration: 0.5, delay: 0.5 }} // Animation duration and delay
                                            className='z-10 text-white'
                                        >
                                            <p>{data.para}</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Whoweare;
