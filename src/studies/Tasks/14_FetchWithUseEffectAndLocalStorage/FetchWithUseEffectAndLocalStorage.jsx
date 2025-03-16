import { useState, useEffect } from 'react';

export default function FetchWithUseEffectAndLocalStorage() {
  const [news, setNews] = useState([]);

  const [favoriteNews, setFavoriteNews] = useState(() => {
    const storedFavorites = localStorage.getItem('favoriteNews');
    return storedFavorites ? JSON.parse(storedFavorites) : []; // Carrega do localStorage
  });

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

  useEffect(() => {
    localStorage.setItem('favoriteNews', JSON.stringify(favoriteNews));
  }, [favoriteNews]);

  const toggleFavorite = (newsItem) => {
    if (favoriteNews.some(item => item.id === newsItem.id)) {
      setFavoriteNews(favoriteNews.filter(item => item.id !== newsItem.id)); // Remove
    } else {
      setFavoriteNews([...favoriteNews, newsItem]);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', padding: '20px', borderRadius: '8px', width: '80%', margin: '0 auto', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ color: '#333', textAlign: 'center', fontSize: '2rem', marginBottom: '20px' }}>News</h1>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {news.map((item) => (
          <li key={item.id} style={{ backgroundColor: '#fff', marginBottom: '15px', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
            <h1 style={{ color: '#007bff', fontSize: '24px' }}>{item.title}</h1>
            <span style={{ fontStyle: 'italic', color: 'gray' }}>{item.category}</span>
            <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{item.content}</p>
            <span style={{ color: 'green', fontWeight: 'bold' }}>{item.author}</span>
            <button
              onClick={() => toggleFavorite(item)}
              style={{
                backgroundColor: favoriteNews.some(fav => fav.id === item.id) ? '#ff4d4d' : '#4CAF50',
                color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer', borderRadius: '5px'
              }}
            >
              {favoriteNews.some(fav => fav.id === item.id) ? 'Remove as favorite' : 'Mark as favorite'}
            </button>
          </li>
        ))}
      </ul>

      <h1 style={{ color: '#333', textAlign: 'center', fontSize: '2rem', marginTop: '30px' }}>Favorite News</h1>
      {favoriteNews.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#777' }}>No news favorited.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {favoriteNews.map((item) => (
            <li key={item.id} style={{ backgroundColor: '#fffae6', marginBottom: '15px', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)' }}>
              <h1 style={{ color: '#007bff', fontSize: '24px' }}>{item.title}</h1>
              <span style={{ fontStyle: 'italic', color: 'gray' }}>{item.category}</span>
              <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{item.content}</p>
              <span style={{ color: 'green', fontWeight: 'bold' }}>{item.author}</span>
              <button
                onClick={() => toggleFavorite(item)}
                style={{
                  backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '8px 12px', cursor: 'pointer', borderRadius: '5px'
                }}
              >
                Remove as favorite
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}