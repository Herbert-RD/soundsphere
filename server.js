
const express = require("express");
const path = require("path")
const app = express();
const PORT = 3000


const AlbumRoutes = require("./routes/AlbumRoutes.js");
app.use("/album", AlbumRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"))
})

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
})