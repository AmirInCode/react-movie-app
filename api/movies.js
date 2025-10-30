// api/movies.js
export default async function handler(req, res) {
    const API_KEY = process.env.TMDB_API_KEY;
    const BASE_URL = "https://api.themoviedb.org/3";
    const { type = "popular", query = "", page = "1" } = req.query;
  
    let url;
    if (type === "search") {
      url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;
    } else {
      url = `${BASE_URL}/movie/${type}?api_key=${API_KEY}&page=${page}`;
    }
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Server error", details: error.message });
    }
  }
  