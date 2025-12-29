import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5001/articles")
      .then((res) => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading articles...</h2>;
  }

  return (
    <div className="container">
      <h1>BeyondChats Articles</h1>

      {articles.map((article) => (
        <div key={article._id} className="card">
          <h2>{article.title}</h2>
          <p>{article.originalContent}</p>

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
