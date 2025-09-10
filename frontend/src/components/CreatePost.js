// import React, { useState } from 'react';
// import { createPost } from '../services/api';

// const CreatePost = ({ onPostCreated }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     content: '',
//     author: ''
//   });
//   const [error, setError] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError('');

//     try {
//       const newPost = await createPost(formData); // directly get post object
//       onPostCreated(newPost); // immediately update posts in App.js
//       setFormData({ title: '', content: '', author: '' });
//     } catch (err) {
//       setError(err.response?.data?.error || 'Failed to create post');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="create-post">
//       <h2>Create New Post</h2>
//       {error && <div className="error-message">{error}</div>}
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="title">Title</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="author">Author (optional)</label>
//           <input
//             type="text"
//             id="author"
//             name="author"
//             value={formData.author}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="content">Content (min. 20 characters)</label>
//           <textarea
//             id="content"
//             name="content"
//             value={formData.content}
//             onChange={handleChange}
//             rows="5"
//             required
//           ></textarea>
//         </div>
//         <button 
//           type="submit" 
//           disabled={isSubmitting || formData.content.length < 20}
//           className="submit-btn"
//         >
//           {isSubmitting ? 'Creating...' : 'Create Post'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;
// ---------------------------
import React, { useState } from 'react';
import { createPost } from '../services/api';

const CreatePost = ({ onPostCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const newPost = await createPost(formData); // API returns the post directly
      onPostCreated(newPost); // update list immediately
      setFormData({ title: '', content: '', author: '' });
    } catch (err) {
      console.error(err);
      setError('Failed to create post');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="create-post">
      <h2>Create New Post</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author (optional)</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content (min. 20 characters)</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={isSubmitting || formData.content.length < 20}
        >
          {isSubmitting ? 'Creating...' : 'Create Post'}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
