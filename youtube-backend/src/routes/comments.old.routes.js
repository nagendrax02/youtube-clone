
const express = require('express');
const {
     getCommentByVideoId,
     createComment,
     deleteComment
} = require('../controllers/comment.controller');

const router = express.Router();

router
     .route('/')
     .post(createComment);

router.route('/:id').delete(deleteComment);

router.route('/:videoId/videos').get(getCommentByVideoId);

module.exports = router;