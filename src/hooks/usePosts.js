import { useState, useEffect } from 'react';
import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
} from '../services/posts.service';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllPosts()
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleCreate = async (postData) => {
    try {
      const newPost = await createPost(postData);
      setPosts((prev) => [newPost, ...prev]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdate = async (id, postData) => {
    try {
      const updated = await updatePost(id, postData);
      setPosts((prev) =>
        prev.map((post) => (post.id === id ? updated : post))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      setPosts((prev) => prev.filter((post) => post.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return { posts, loading, error, handleCreate, handleUpdate, handleDelete };
};

export default usePosts;