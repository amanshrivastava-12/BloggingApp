// // import React, { useState, useEffect } from 'react';
// // import { useParams, Link } from 'react-router-dom';
// // import { getPostById, likePost } from '../services/api';

// // const PostDetail = () => {
// //   const { id } = useParams();
// //   const [post, setPost] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');
// //   const [liking, setLiking] = useState(false);

// //   useEffect(() => {
// //     const fetchPost = async () => {
// //       try {
// //         const response = await getPostById(id);
// //         setPost(response.data);
// //       } catch (err) {
// //         setError(err.response?.data?.error || 'Failed to fetch post');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchPost();
// //   }, [id]);

// //   const handleLike = async () => {
// //     setLiking(true);
// //     try {
// //       const response = await likePost(id);
// //       setPost(response.data);
// //     } catch (err) {
// //       setError(err.response?.data?.error || 'Failed to like post');
// //     } finally {
// //       setLiking(false);
// //     }
// //   };

// //   if (loading) return <div className="loading">Loading post...</div>;
// //   if (error) return <div className="error-message">{error}</div>;
// //   if (!post) return <div className="error-message">Post not found</div>;

// //   return (
// //     <div className="post-detail">
// //       <Link to="/" className="back-link">← Back to all posts</Link>
      
// //       <article className="post-full">
// //         <h1 className="post-title">{post.title}</h1>
// //         <div className="post-meta">
// //           <span>By {post.author || 'Anonymous'}</span>
// //           <span>•</span>
// //           <span>{new Date(post.createdAt).toLocaleDateString()}</span>
// //         </div>
        
// //         <div className="post-content">
// //           {post.content}
// //         </div>
        
// //         <div className="post-actions">
// //           <button 
// //             onClick={handleLike} 
// //             disabled={liking}
// //             className="like-btn"
// //           >
// //             {liking ? 'Liking...' : '👍 Like'}
// //           </button>
// //           <span className="likes-count">{post.likes} likes</span>
// //         </div>
// //       </article>
// //     </div>
// //   );
// // };

// // export default PostDetail;
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getPostById, likePostById } from '../services/api';

// const PostDetail = () => {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);

//   const fetchPost = async () => {
//     if (!id) return;
//     try {
//       const data = await getPostById(id);
//       setPost(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleLike = async () => {
//     try {
//       const updatedPost = await likePostById(id);
//       setPost(updatedPost);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchPost();
//   }, [id]);

//   if (!post) return <p>Loading...</p>;

//   return (
//     <div style={{ padding: '20px', border: '1px solid #ccc' }}>
//       <h2>{post.title}</h2>
//       <p>{post.content}</p>
//       <p>Author: {post.author}</p>
//       <p>Likes: {post.likes}</p>
//       <button onClick={handleLike}>Like</button>
//     </div>
//   );
// };

// export default PostDetail;
// ----------------------------------
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostById, likePostById } from '../services/api';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPostById(id);
        setPost(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPost();
  }, [id]);

  const handleLike = async () => {
    try {
      const updatedPost = await likePostById(id);
      setPost(updatedPost);
    } catch (err) {
      console.error(err);
    }
  };

  if (!post) return <p className="loading">Loading post...</p>;

  return (
    <div className="post-detail">
      <Link to="/" className="back-link">← Back to all posts</Link>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p><strong>Author:</strong> {post.author || 'Anonymous'}</p>
      <p><strong>Likes:</strong> {post.likes}</p>
      <button onClick={handleLike}>👍 Like</button>
    </div>
  );
};

export default PostDetail;
