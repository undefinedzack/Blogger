const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.json());

mongoose.connect(
  "mongodb+srv://" +
    process.env.ME +
    ":" +
    process.env.PASSWORD +
    "@cluster0.dnnhc.mongodb.net/blogger-database?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected!");
});

const blogRouter = require("./routes/blogs");
app.use("/blogs", blogRouter);

app.get("/", (req, res) => {
  res.send("server running!");
});

app.listen(process.env.PORT || 8888, (err) => {
  if (err) console.log(err);
});
