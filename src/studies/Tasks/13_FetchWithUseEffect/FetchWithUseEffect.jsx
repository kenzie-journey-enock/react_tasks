import { useState, useEffect } from 'react';

export default function FetchWithUseEffect() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('https://blog-fake-api.onrender.com/news');
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Erro ao buscar as notícias:', error);
      }
    }

    fetchNews();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: '#333', textAlign: 'center', fontSize: '2rem', marginBottom: '20px' }}>News</h1>
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
}
