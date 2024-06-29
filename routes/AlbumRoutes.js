const express = require("express")
const router = express.Router()
const AlbumController = require("../controllers/AlbumController");


router.get("/", AlbumController.Get);

module.exports = router;