const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db.js");
const bookRoutes = require("./routes/bookRoutes");

dotenv.config(); // MUST be before connectDB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.json()); app.use("/api/books", bookRoutes);

app.get("/", (req, res) => {
  res.send("Library API is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
