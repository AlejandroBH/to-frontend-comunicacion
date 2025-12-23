import { useState, useEffect } from "react";
import api from "../services/api";
import PostList from "../components/common/PostList";
import "../styles/posts.css";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        setError("Error al cargar los posts", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleLike = async (id) => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('Debes iniciar sesión para dar like a los posts');
      window.location.href = '/login';
      return;
    }

    try {
      const response = await api.patch(`/posts/${id}/like`);
      setPosts(posts.map((post) => (post.id === id ? response.data : post)));
    } catch (err) {
      console.error("Error al dar like:", err);
      if (err.response && err.response.status === 401) {
        alert('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.');
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }
  };

  if (loading) return (
    <div className="posts-page">
      <div className="loading-container">Cargando posts...</div>
    </div>
  );

  if (error) return (
    <div className="posts-page">
      <div className="error-container">{error}</div>
    </div>
  );

  return (
    <div className="posts-page">
      <PostList posts={posts} onLike={handleLike} />
    </div>
  );
};

export default PostsPage;
