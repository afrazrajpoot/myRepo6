import { AnimeList } from "./Components/AnimeList";
import { AnimeInfo } from "./Components/AnimeInfo";
import { AddToList } from "./Components/AddToList";
import { RemoveFromList } from "./Components/RemoveFromList";
import { useAnimeContext } from "./context/AnimeContext";
import Header from "./Components/Header";
import { motion } from "framer-motion";
import { containerVariants } from "./utils/cn";

import { useEffect } from "react";
function App() {
  const {
    animeInfo,
    animeData,
    setAnimeInfo,
    myAnimeList,
    addTo,
    removeFrom,
    isDarkMode,
  } = useAnimeContext();
  const textColor = isDarkMode ? "text-white" : "text-gray-700";
  console.log(animeData);

  return (
    <main
      className={`w-full overflow-x-hidden h-screen ${
        isDarkMode ? "bg-[#081229]" : "bg-white"
      }`}
    >
      <Header />
      <div className="w-full px-[3vw] md:px-0 flex md:justify-center mt-[15vw] md:mt-[10vw]">
        {animeInfo && (
          <main className="w-full z-40 h-screen fixed bg-gray-700 top-0 flex justify-center items-center opacity-95">
            <motion.section
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="relative flex items-center justify-center p-[3vw] rounded-xl w-[70vw] md:w-[32vw] h-[80vw] md:h-[32vw]"
            >
              <span
                onClick={() => setAnimeInfo(null)}
                className="text-[4.3vw] md:text-[1.3vw] text-white font-semibold absolute top-[3vw] md:top-[1vw] right-[3vw] md:right-[1vw] p-[0.5vw] cursor-pointer hover:bg-red-600 hover:text-white rounded-md h-[2vw] w-[2vw] flex items-center justify-center"
              >
                X
              </span>
              <AnimeInfo animeInfo={animeInfo} />
            </motion.section>
          </main>
        )}
        <div className="">
          <h2
            className={`${textColor} text-[4.5vw] md:text-[1.5vw] font-semibold my-[1vw]`}
          >
            Most Trending
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-[2vw]">
            <AnimeList
              animelist={animeData}
              setAnimeInfo={setAnimeInfo}
              animeComponent={AddToList}
              handleList={(anime) => addTo(anime)}
            />
          </div>
          <h2
            className={`${textColor} text-[4.5vw] md:text-[1.5vw] font-semibold my-[1vw]`}
          >
            My List
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-[2vw]">
            <AnimeList
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              animelist={myAnimeList}
              setAnimeInfo={setAnimeInfo}
              animeComponent={RemoveFromList}
              handleList={(anime) => removeFrom(anime)}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
