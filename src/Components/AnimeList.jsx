import React, { useEffect } from "react";
import { useAnimeContext } from "../context/AnimeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
export const AnimeList = ({
  animelist,
  setAnimeInfo,
  animeComponent,
  handleList,
}) => {
  const { isDarkMode } = useAnimeContext();
  const textColor = isDarkMode ? "text-white" : "text-gray-700";
  const AddToList = animeComponent;
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-cubic",
      once: true,
    });
  }, []);
  return (
    <>
      {animelist
        ? animelist.map((anime, index) => {
            return (
              <section
                className={`w-full ${
                  isDarkMode ? "bg-[#040a18] rounded-md" : "bg-white"
                } cursor-pointer h-[55vw] p-[1vw] md:max-w-[16vw] md:h-[22vw] shadow-md text-center overflow-hidden relative`}
              >
                <motion.figure
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setAnimeInfo(anime)}
                  className="w-full h-[40vw] md:h-[15vw]"
                >
                  <img
                    className="w-full h-full"
                    src={anime?.images?.jpg?.large_image_url}
                    alt="anime"
                  />
                </motion.figure>
                <div className="anime-info p-[0.7vw]">
                  <h4
                    className={`text-[3vw] md:text-[1vw] pt-[0.5vw] ${textColor}`}
                  >
                    {anime?.title}
                  </h4>
                  <div className="overlay" onClick={() => handleList(anime)}>
                    <h4 className={`text-[3vw] md:text-[1vw] ${textColor}`}>
                      {anime?.title_japanese}
                    </h4>
                    <h3 className={`text-[3vw] md:text-[1vw] ${textColor}`}>
                      SYNOPSIS
                    </h3>
                    <div className="synopsis no-scrollbar">
                      <p className={`text-[2vw] md:text-[1vw] ${textColor}`}>
                        {anime?.synopsis}
                      </p>
                    </div>
                    <AddToList />
                  </div>
                </div>
              </section>
            );
          })
        : "Not Found"}
    </>
  );
};
