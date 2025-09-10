const validatePost = (req, res, next) => {
  const { title, content } = req.body;
  
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required' });
  }
  
  if (!content || content.length < 20) {
    return res.status(400).json({ 
      error: 'Content must be at least 20 characters long' 
    });
  }
  
  next();
};

module.exports = { validatePost };