const axios = require("axios");
const cheerio = require("cheerio");

const blogLinks = [
  "https://beyondchats.com/blogs/...",
  "https://beyondchats.com/blogs/...",
  "https://beyondchats.com/blogs/...",
];

async function scrapeBlog(url) {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const title = $("h1").first().text().trim();
  const content = $("article").text().trim();

  return { title, content, url };
}

async function run() {
  for (let link of blogLinks) {
    const article = await scrapeBlog(link);
    console.log(article.title);
  }
}

run();
