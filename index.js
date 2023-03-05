const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const bookRoutes = require("./routes/Book.routes");

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());

// Configuring body parser middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// database connection
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log("error", err));

app.use("/book", bookRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Server is running on http://localhost:${port}`);
});
