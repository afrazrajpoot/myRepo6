// api.js
export async function fetchData(search) {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`);
    const resData = await res.json();
    return resData?.data;
  }
  