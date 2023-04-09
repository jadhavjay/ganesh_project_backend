const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const authController = require("./controllers/authController");
const propertyController = require("./controllers/propertyController");
const uploadController = require("./controllers/uploadController");

// db connecting
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/users", () =>
  console.log("Db is connected")
);

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("public/images"));

app.use("/auth", authController);
app.use("/property", propertyController);
app.use("/upload", uploadController);

// starting server
const port = 5000;
app.listen(port, () => console.log("Server has been started " + port));
