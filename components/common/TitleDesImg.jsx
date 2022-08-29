import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TitleDesImg = ({ title, des, img }) => {
  const zoomInVariant = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <h2 className="text-[#696969] text-6xl font-medium">
        {`${title}`?.split("")?.map((letter, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              x: -100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 0.08 * index,
              ease: "easeInOut",
              delay: 0.08 * index,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h2>
      <p className="font-secondary text-2xl pt-3 text-[#545454] leading-[1.5]">
        {des}
      </p>
      {img && (
        <motion.div
          className="flex justify-center pt-8"
          variants={zoomInVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true }}
        >
          <Image src={img} alt="Code" className="w-[85%] h-auto" />
        </motion.div>
      )}
    </>
  );
};

export default TitleDesImg;
