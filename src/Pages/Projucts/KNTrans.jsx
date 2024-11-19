
import React from 'react';
import { motion } from "framer-motion";
import { LampContainer } from "../../Components/ui/lamp";
import { StickyScroll } from "../../Components/ui/sticky-scroll-reveal";
import { GasContent } from '../../Constant'; // Importing the separated data
import KNTransMobile from './KNTransMobile';

const KNTrans = () => {
  return (
    <><LampContainer>
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
            className="mt-[7%] sm:bg-gradient-to-br from-slate-300 to-slate-500 bg-white py-4 bg-clip-text text-center text-3xl sm:font-medium font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            KN Transport Management System
          </motion.h1>
     
        </div>
      </section>
       {/* Desktop View */}
       <div className="m-0 w-screen sm:block hidden">
        <StickyScroll content={GasContent} />
      </div>

      {/* Mobile View */}
     
     <div className="m-0 w-screen sm:hidden block">
     <KNTransMobile/>
      </div>
    </LampContainer></>
  );
};

export default KNTrans;

