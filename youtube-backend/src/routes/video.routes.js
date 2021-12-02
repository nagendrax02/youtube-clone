const express = require("express");
const Authenticate = require("../middleware/authenticate.middleware");
const {videUpload} = require("../middleware/video.middleware");

const videoController = require("../controllers/video.controller");
const {json} = require("body-parser");

const router = express.Router();
const Controller = videoController;
router.post("/api/video", Authenticate, videUpload.any("video"), (req, res) => {
    Controller.upload(req, res);
});


router.get("/api/video/:filename", (req, res) => {
    Controller.stream(req, res);
});

module.exports = router;

// const express = require("express");
// const Authenticate = require("../middleware/authenticate.middleware");
// const {videUpload, thumbnail} = require("../middleware/video.middleware");
// // const {thumbnail}
// const videoController = require("../controllers/video.controller");
// // const {json}  = require("body-parser");

// const router = express.Router();
// const Controller = new videoController();
// console.log('Controller:', Controller);
// router.post("/api/video", Authenticate, videUpload.single("video"), thumbnail.single("thumbnail"), (req, res) => {
//     Controller.upload(req, res);
// });

// router.get("/api/video/:filename", (req, res) => {
//     Controller.stream(req, res);
// });

// module.exports = router;
