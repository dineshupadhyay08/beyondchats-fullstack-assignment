import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://beyondchats-fullstack-assignment-cfc9.onrender.com/articles"
      )
      .then((res) => {
        // 🛡️ Safety check
        if (Array.isArray(res.data)) {
          setArticles(res.data);
        } else {
          console.error("API did not return an array:", res.data);
          setArticles([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API error:", err);
        setArticles([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading articles...</h2>;
  }

  return (
    <div className="container">
      <h1>BeyondChats Articles</h1>

      {articles.length === 0 && <p>No articles found.</p>}

      {articles.map((article) => (
        <div key={article._id} className="card">
          <h2>{article.title}</h2>
          <p>{article.updatedContent || article.originalContent}</p>

          {article.sourceUrl && (
            <a href={article.sourceUrl} target="_blank" rel="noreferrer">
              Read original article →
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
