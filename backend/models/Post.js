const { promisePool } = require('../config/database');
const slugify = require('slugify');

class Post {
  // Get all posts
  static async findAll() {
    try {
      const [rows] = await promisePool.query(
        'SELECT * FROM posts ORDER BY created_at DESC'
      );
      return rows;
    } catch (error) {
      throw new Error(`Error fetching posts: ${error.message}`);
    }
  }

  // Find post by ID
  static async findById(id) {
    try {
      const [rows] = await promisePool.query(
        'SELECT * FROM posts WHERE id = ?',
        [id]
      );
      return rows[0];
    } catch (error) {
      throw new Error(`Error fetching post: ${error.message}`);
    }
  }

  // Create new post
  static async create(postData) {
    const { title, content, author } = postData;
    const slug = slugify(title, { lower: true, strict: true });
    
    try {
      const [result] = await promisePool.query(
        'INSERT INTO posts (title, content, author, slug) VALUES (?, ?, ?, ?)',
        [title, content, author || 'Anonymous', slug]
      );
      
      // Return the newly created post
      const [newPost] = await promisePool.query(
        'SELECT * FROM posts WHERE id = ?',
        [result.insertId]
      );
      
      return newPost[0];
    } catch (error) {
      // Handle duplicate slug error
      if (error.code === 'ER_DUP_ENTRY') {
        const uniqueSlug = `${slug}-${Date.now()}`;
        const [result] = await promisePool.query(
          'INSERT INTO posts (title, content, author, slug) VALUES (?, ?, ?, ?)',
          [title, content, author || 'Anonymous', uniqueSlug]
        );
        
        const [newPost] = await promisePool.query(
          'SELECT * FROM posts WHERE id = ?',
          [result.insertId]
        );
        
        return newPost[0];
      }
      throw new Error(`Error creating post: ${error.message}`);
    }
  }

  // Like a post
  static async likePost(id) {
    try {
      await promisePool.query(
        'UPDATE posts SET likes = likes + 1 WHERE id = ?',
        [id]
      );
      
      const [updatedPost] = await promisePool.query(
        'SELECT * FROM posts WHERE id = ?',
        [id]
      );
      
      return updatedPost[0];
    } catch (error) {
      throw new Error(`Error liking post: ${error.message}`);
    }
  }
}

module.exports = Post;