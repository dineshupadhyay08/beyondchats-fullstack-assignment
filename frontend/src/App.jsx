import { useEffect, useState } from "react";
import axios from "axios";

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
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>BeyondChats Articles</h1>

      {articles.length === 0 && <p>No articles found</p>}

      {articles.map((article) => (
        <div
          key={article._id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "6px",
          }}
        >
          <h2>{article.title}</h2>
          <p>{article.originalContent}</p>

          {article.sourceUrl && (
            <a href={article.sourceUrl} target="_blank" rel="noreferrer">
              Read Original
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
