const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getPostById,
  createPost,
  likePost
} = require('../controllers/postController');
const { validatePost } = require('../middleware/validation');

// GET all posts
router.get('/', getAllPosts);

// GET single post
router.get('/:id', getPostById);

// POST create new post
router.post('/', validatePost, createPost);

// PATCH like a post
router.patch('/:id/like', likePost);

module.exports = router;