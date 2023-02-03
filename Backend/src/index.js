const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

const server = require("http").Server(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

mongoose.connect("mongodb://192.168.149.82:27017/instagram", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(cors());

app.use(
  "/files",
  express.static(path.resolve(__dirname, "../", "uploads", "resized"))
);

app.use(require("./routes"));

server.listen(3333, () => console.log("funcionando"));
