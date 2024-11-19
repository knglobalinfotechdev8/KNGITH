import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaqContent } from "../../Constant";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";

export default function Faq({ className }) {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className={`py-8 md:px-20 bg-gray-400 px-5 2xl:px-[12%] ${className}`}>
      <div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-center">FAQ</h1>
      </div>
      <motion.div
        initial={{
          y: -200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
        className="py-10 md:mt-10 mt-4"
      >
        {FaqContent.map((data, i) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Initial state for each accordion item
            whileInView={{ opacity: 1, y: 0 }} // Animation when in view
            transition={{ duration: 0.5, delay: i * 0.1 }} // Delay each item slightly
            key={data.id} // Use data.id instead of index for unique key
          >
            <Accordion open={open === data.id}>
              <div
                className="flex justify-between items-center text-white py-3 md:py-4"
                onClick={() => handleOpen(data.id)}
              >
                <AccordionHeader className="text-base md:text-lg">
                  {data.question}
                </AccordionHeader>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="h-6 w-6 md:h-8 md:w-8 text-white cursor-pointer"
                />
              </div>
              <AccordionBody className="text-sm md:text-base mb-4 text-gray-300">
                {data.answer}
              </AccordionBody>
            </Accordion>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
