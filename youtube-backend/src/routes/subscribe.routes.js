
const express = require('express');
const {
     getChannels,
     getSubscribedVideos,
     getSubscribers,
     createSubscriber
} = require('../controllers/subscriber.controller');

const router = express.Router();


router.route("/:id").get(getSubscribers).post(createSubscriber);

module.exports = router;
