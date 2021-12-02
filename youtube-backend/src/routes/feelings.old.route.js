const express = require("express");
const {
  createFeeling,
  checkFeeling,
  getLikedVideos,
} = require("../controllers/feelings.controller");

const router = express.Router();

router.route("/").post(createFeeling);

router.route("/check").post(checkFeeling);

router.route("/videos").get(getLikedVideos);

module.exports = router;
