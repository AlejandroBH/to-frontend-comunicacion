import { useState, useEffect } from "react";
import api from "../services/api";
import PostList from "../components/common/PostList";

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
    try {
      const response = await api.patch(`/posts/${id}/like`);
      setPosts(posts.map((post) => (post.id === id ? response.data : post)));
    } catch (err) {
      console.error("Error al dar like:", err);
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <PostList posts={posts} onLike={handleLike} />
    </div>
  );
};

export default PostsPage;
