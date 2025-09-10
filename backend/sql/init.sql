CREATE DATABASE IF NOT EXISTS blogging_app;
USE blogging_app;

CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(100) DEFAULT 'Anonymous',
    likes INT DEFAULT 0,
    slug VARCHAR(255) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data (optional)
INSERT INTO posts (title, content, author, likes, slug) VALUES
('Welcome to the Blog', 'This is the first post on our amazing blogging platform. We are excited to have you here!', 'Admin', 5, 'welcome-to-the-blog'),
('Getting Started with React', 'React is a fantastic JavaScript library for building user interfaces. Here are some tips to get started...', 'Jane Doe', 3, 'getting-started-with-react'),
('The Future of Web Development', 'Web development is constantly evolving. In this post, we explore the latest trends and technologies.', 'John Smith', 8, 'future-of-web-development');