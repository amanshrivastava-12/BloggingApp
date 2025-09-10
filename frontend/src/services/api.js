// // // import axios from 'axios';

// // // const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// // // const api = axios.create({
// // //   baseURL: API_BASE_URL,
// // //   headers: {
// // //     'Content-Type': 'application/json',
// // //   },
// // // });

// // // // Posts API calls
// // // export const getAllPosts = () => api.get('/posts');
// // // export const getPostById = (id) => api.get(`/posts/${id}`);
// // // export const createPost = (postData) => api.post('/posts', postData);
// // // export const likePost = (id) => api.patch(`/posts/${id}/like`);

// // // export default api;
// // import axios from 'axios';

// // const API_URL = 'http://localhost:5000/api/posts';

// // export const getAllPosts = async () => {
// //   const res = await axios.get(API_URL);
// //   return res.data;
// // };

// // export const getPostById = async (id) => {
// //   const res = await axios.get(`${API_URL}/${id}`);
// //   return res.data;
// // };

// // export const likePostById = async (id) => {
// //   const res = await axios.patch(`${API_URL}/${id}/like`);
// //   return res.data;
// // };

// // export const createPost = async (postData) => {
// //   const res = await axios.post(API_URL, postData);
// //   return res.data;
// // };
// // --------------------------------
// // import axios from 'axios';

// // const API_URL = 'http://localhost:5000/api/posts';

// // export const getAllPosts = async () => {
// //   const res = await axios.get(API_URL);
// //   return res.data;
// // };

// // export const getPostById = async (id) => {
// //   const res = await axios.get(`${API_URL}/${id}`);
// //   return res.data;
// // };

// // export const likePostById = async (id) => {
// //   const res = await axios.patch(`${API_URL}/${id}/like`);
// //   return res.data;
// // };

// // export const createPost = async (postData) => {
// //   const res = await axios.post(API_URL, postData);
// //   return res.data;
// // };
// // ------------------
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/posts';

// export const getAllPosts = async () => {
//   const res = await axios.get(API_URL);
//   return res.data; // returns array of posts
// };

// export const getPostById = async (id) => {
//   const res = await axios.get(`${API_URL}/${id}`);
//   return res.data; // returns single post object
// };

// export const likePostById = async (id) => {
//   const res = await axios.patch(`${API_URL}/${id}/like`);
//   return res.data; // returns updated post object
// };

// export const createPost = async (postData) => {
//   const res = await axios.post(API_URL, postData);
//   return res.data; // returns created post object directly
// };

// export default {
//   getAllPosts,
//   getPostById,
//   likePostById,
//   createPost
// };
// --------------------------
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/posts';

export const getAllPosts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getPostById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const likePostById = async (id) => {
  const res = await axios.patch(`${API_URL}/${id}/like`);
  return res.data;
};

export const createPost = async (postData) => {
  const res = await axios.post(API_URL, postData);
  return res.data;
};
