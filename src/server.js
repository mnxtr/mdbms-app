const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection (using any database like MySQL/PostgreSQL/MongoDB)
const { Pool } = require("pg"); // Example for PostgreSQL
const pool = new Pool({
  user: "youruser",
  host: "localhost",
  database: "manufacturing_db",
  password: "yourpassword",
  port: 5432,
});

// API route to get products
app.get("/api/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
