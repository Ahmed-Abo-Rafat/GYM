
export const exerciseOptions = {
    
  method: 'GET',
  headers: {
    'x-rapidapi-key': '57e10ea112msh37d704b5eff61f9p1d88ddjsne58d838de31b',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '8b1b55e58amshfa718687a7d994bp1be775jsn637acc44c42a',
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {

    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}
