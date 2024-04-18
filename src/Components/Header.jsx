import React from "react";
import { useAnimeContext } from "../context/AnimeContext";

const Header = () => {
  const { setSearch, toggleDarkMode, isDarkMode } = useAnimeContext();
  return (
    <header className="w-full p-[1vw] bg-red-700 flex justify-between items-center fixed top-0 text-white z-20">
      <h1 className="text-[6vw] md:text-[2vw] font-medium">Jikan Anime</h1>
      <div className="w-full max-w-[60vw] md:max-w-[30vw]">
        <input
          className="p-[2.5vw] md:p-[0.7vw] focus:outline-none rounded-md text-[3vw] md:text-[1vw] border-none w-full text-gray-600"
          type="search"
          placeholder="Search your anime"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div
        className="w-[3vw] h-[3vw] cursor-pointer rounded-full"
        onClick={toggleDarkMode}
      >
        <img
          src={`${
            isDarkMode
              ? "https://png.pngtree.com/element_our/20190601/ourmid/pngtree-moon-icon-image_1338422.jpg"
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumCDeS16yBjd7rXUde39mMDqtRPinwdvmdw&s"
          }`}
          alt="image"
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
