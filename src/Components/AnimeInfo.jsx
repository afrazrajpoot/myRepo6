import React from "react";
import { useAnimeContext } from "../context/AnimeContext";
import { motion } from "framer-motion";
export const AnimeInfo = ({ animeInfo }) => {
  const {
    title,
    images: {
      jpg: { large_image_url },
    },
    rank,
    score,
    popularity,
  } = animeInfo;
  const { isDarkMode } = useAnimeContext();
  const textColor = isDarkMode ? "text-white" : "text-gray-700";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`w-full ${
        isDarkMode ? "bg-[#040a18] rounded-md" : "bg-white"
      } rounded-[1vw] p-[1vw] flex justify-center items-center flex-col z-50 mt-[2vw]`}
    >
      <h3
        className={`text-center text-[2.5vw] md:text-[1vw] w-full max-w-[50vw] md:max-w-[20vw] ${textColor}`}
      >
        {title}
      </h3>
      <br />
      <motion.figure
        whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
        className="w-full max-w-[30vw] bg-white md:max-w-[15vw] h-[35vw] md:h-[17vw]"
      >
        <img
          className="w-full rounded-md z-50 h-full"
          src={large_image_url}
          alt="image"
        />
      </motion.figure>
      <div className="w-full p-[1vw] flex items-center flex-col">
        <h3 className={`text-[2.5vw] md:text-[1vw] font-medium ${textColor}`}>
          Popularity: {popularity}
        </h3>
        <h3 className={`text-[2.5vw] md:text-[1vw] font-medium ${textColor}`}>
          Rank: {rank}
        </h3>
        <h3 className={`text-[2.5vw] md:text-[1vw] font-medium ${textColor}`}>
          Score: {score}
        </h3>
      </div>
    </motion.div>
  );
};
