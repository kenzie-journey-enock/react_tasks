import { useState } from "react";

export default function FetchListFromAPI() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      setError(null);
      const response = await fetch("https://blog-fake-api.onrender.com/news");
      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }
      const data = await response.json();
      setNews(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button
        onClick={fetchNews}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", marginBottom: "20px" }}
      >
        Fetch News
      </button>
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {news.map((item) => (
          <li key={item.id} style={{ background: "#E9ECEF", margin: "10px 0", padding: "10px", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,0.1)" }}>
            <h1 style={{ color: '#007bff', fontSize: '24px' }}>{item.title}</h1>
            <span style={{ fontStyle: 'italic', color: 'gray' }}>{item.category}</span>
            <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{item.content}</p>
            <span style={{ color: 'green', fontWeight: 'bold' }}>{item.author}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
