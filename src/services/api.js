

// export const getPopularMovies = async () => {
//     const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
//     const data = await response.json();
//     return data.results;
// };

// export const searchMovies = async (query) => {
//     const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
//     const data = await response.json();
//     return data.results;
// };


export const getPopularMovies = async (page = 1) => {
    const res = await fetch(`/api/movies?type=popular&page=${page}`);
    const data = await res.json();
    return data.results || [];
  };
  
  export const searchMovies = async (query, page = 1) => {
    const res = await fetch(`/api/movies?type=search&query=${encodeURIComponent(query)}&page=${page}`);
    const data = await res.json();
    return data.results || [];
  };