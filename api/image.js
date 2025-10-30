export default async function handler(req, res) {
    try {
      const { path } = req.query;
  
      if (!path) {
        return res.status(400).json({ error: "Missing image path" });
      }
  
      const imageUrl = `https://image.tmdb.org/t/p/w500${path}`;
      const response = await fetch(imageUrl);
  
      if (!response.ok) {
        return res.status(500).json({ error: "Failed to fetch image" });
      }
  
      const buffer = await response.arrayBuffer();
  
      res.setHeader("Content-Type", "image/jpeg");
      res.send(Buffer.from(buffer));
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  