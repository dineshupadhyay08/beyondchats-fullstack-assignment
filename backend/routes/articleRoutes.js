const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

// ✅ CREATE ARTICLE (POST)
router.post("/", async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET ALL ARTICLES
router.get("/", async (req, res) => {
  try {
    console.log("GET /articles hit");
    const articles = await Article.find().lean();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET ARTICLE BY ID
router.put("/:id", async (req, res) => {
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedArticle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ DELETE article
router.delete("/:id", async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.json({ message: "Article deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
