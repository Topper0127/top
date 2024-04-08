// /api/quote

const api_url = "https://zenquotes.io/api/today";

async function handler(req, res) {
  if (req.method === "GET") {
    const response = await fetch(api_url);
    const data = await response.json();

    res.status(200).json(data);
  }
}

export default handler;
