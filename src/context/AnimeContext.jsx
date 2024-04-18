// AnimeContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../api/fetchData";

const AnimeContext = createContext();

export const useAnimeContext = () => useContext(AnimeContext);

export const AnimeProvider = ({ children }) => {
  const [search, setSearch] = useState("Dragon");
  const [animeData, setAnimeData] = useState([]);
  const [animeInfo, setAnimeInfo] = useState(null);
  const [myAnimeList, setMyAnimeList] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const addTo = (anime) => {
    const index = myAnimeList.findIndex((myanime) => myanime?.mal_id === anime?.mal_id);
    if (index < 0) {
      const newArray = [...myAnimeList, anime];
      setMyAnimeList(newArray);
    }
  };

  const removeFrom = (anime) => {
    const newArray = myAnimeList.filter((myanime) => myanime.mal_id !== anime.mal_id);
    setMyAnimeList(newArray);
  };
  
  const toggleDarkMode = ()=> {
    setIsDarkMode(!isDarkMode);
  }
 
  useEffect(()=>{
    const data = async()=> {
      const data = await fetchData(search);
      setAnimeData(data);
    }
    data();
   }, [])

   useEffect(() => {
     const timeoutId = setTimeout(async () => {
       const data = await fetchData(search);
       setAnimeData(data);
     }, 3000);
   
     return () => clearTimeout(timeoutId);
   }, [search]);

  const value = {
    search, setSearch, animeData, animeInfo, setAnimeInfo, myAnimeList, addTo, removeFrom, isDarkMode, setIsDarkMode, toggleDarkMode
  };

  return <AnimeContext.Provider value={value}>{children}</AnimeContext.Provider>;
};
