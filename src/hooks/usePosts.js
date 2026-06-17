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
    const cargarPosts = async () => {
      try {
        const data = await getAllPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    cargarPosts();
  }, []);

  const handleCreate = async (data) => {
    try {
      const nuevo = await createPost(data);
      setPosts((prev) => [nuevo, ...prev]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpdate = async (id, data) => {
    try {
      const actualizado = await updatePost(id, data);
      setPosts((prev) =>
        prev.map((p) => (p.id === id ? actualizado : p))
      );
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    posts,
    loading,
    error,
    handleCreate,
    handleUpdate,
    handleDelete,
  };
};

export default usePosts;