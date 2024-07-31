
export const exerciseOptions = {
    
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8b1b55e58amshfa718687a7d994bp1be775jsn637acc44c42a',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8b1b55e58amshfa718687a7d994bp1be775jsn637acc44c42a',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
