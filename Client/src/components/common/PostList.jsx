const PostList = ({ posts, onLike }) => {
  return (
    <div className="posts-container">
      <h2 className="posts-title">Lista de Posts</h2>
      {posts.length === 0 ? (
        <p>No hay posts disponibles.</p>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-content">{post.content}</p>
              <p>Autor: {post.author}</p>
              <p>Fecha: {new Date(post.createdAt).toLocaleDateString()}</p>
              <div className="post-actions">
                <span className="like-count">Likes: {post.likes}</span>
                <button className="like-button" onClick={() => onLike(post.id)}>
                  Like
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
