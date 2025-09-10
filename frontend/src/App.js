// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CreatePost from './components/CreatePost';
// import PostList from './components/PostList';
// import PostDetail from './components/PostDetail';
// import { getAllPosts } from './services/api';
// import './App.css';

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await getAllPosts();
//       setPosts(response.data);
//     } catch (err) {
//       setError(err.response?.data?.error || 'Failed to fetch posts');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePostCreated = (newPost) => {
//     setPosts([newPost, ...posts]);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <header className="app-header">
//           <h1>Blogging App</h1>
//           <p>Share your thoughts with the world</p>
//         </header>

//         <main className="app-main">
//           <Routes>
//             <Route path="/" element={
//               <>
//                 <CreatePost onPostCreated={handlePostCreated} />
//                 {loading ? (
//                   <div className="loading">Loading posts...</div>
//                 ) : error ? (
//                   <div className="error-message">{error}</div>
//                 ) : (
//                   <PostList posts={posts} />
//                 )}
//               </>
//             } />
//             <Route path="/post/:id" element={<PostDetail />} />
//           </Routes>
//         </main>

//         <footer className="app-footer">
//           <p>© 2023 Blogging App. All rights reserved.</p>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;
// ------------
import React, { useState, useEffect } from 'react';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import { getAllPosts } from './services/api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const data = await getAllPosts();
      setPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handlePostCreated = (newPost) => {
    // prepend the new post
    setPosts([newPost, ...posts]);
  };

  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h1>My Blog App</h1>
          <p>Share your thoughts and ideas!</p>
        </header>

        <main className="app-main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <CreatePost onPostCreated={handlePostCreated} />
                  <PostList posts={posts} setPosts={setPosts} />
                </>
              }
            />
            <Route path="/posts/:id" element={<PostDetail />} />
          </Routes>
        </main>

        <footer className="app-footer">
          &copy; 2025 My Blog App. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;
