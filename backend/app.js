require("dotenv").config();
const express = require("express");
const connectDB = require("./db");

const app = express();
connectDB();

const cors = require("cors");
app.use(cors());

const articleRoutes = require("./routes/articleRoutes");

app.use(express.json()); // 👈 important
app.use("/articles", articleRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log("Server started", PORT);
});
