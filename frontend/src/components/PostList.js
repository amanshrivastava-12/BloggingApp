// import React, { useEffect, useState } from 'react';
// import { getAllPosts, likePostById } from '../services/api';

// const PostList = () => {
//   const [posts, setPosts] = useState([]);

//   const fetchPosts = async () => {
//     try {
//       const data = await getAllPosts();
//       setPosts(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleLike = async (id) => {
//     try {
//       const updatedPost = await likePostById(id);
//       setPosts(posts.map(p => (p.id === id ? updatedPost : p)));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       {posts.map(post => (
//         <div key={post.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
//           <h3>{post.title}</h3>
//           <p>{post.content}</p>
//           <p>Author: {post.author}</p>
//           <p>Likes: {post.likes}</p>
//           <button onClick={() => handleLike(post.id)}>Like</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PostList;
// ---------------------
import React from 'react';
import { likePostById } from '../services/api';
import { Link } from 'react-router-dom';

const PostList = ({ posts, setPosts }) => {
  const handleLike = async (id) => {
    try {
      const updatedPost = await likePostById(id);
      setPosts(posts.map(p => (p.id === id ? updatedPost : p)));
    } catch (err) {
      console.error(err);
    }
  };

  if (!posts.length) return <p className="loading">No posts yet...</p>;

  return (
    <div className="post-list">
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <h3>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.content.substring(0, 100)}...</p>
          <div className="post-meta">
            <span className="post-author">{post.author || 'Anonymous'}</span>
            <div className="post-likes">
              <button onClick={() => handleLike(post.id)}>👍 Like</button>
              <span>{post.likes} likes</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
