const PostList = ({ posts, onLike }) => {
  return (
    <div>
      <h2>Lista de Posts</h2>
      {posts.length === 0 ? (
        <p>No hay posts disponibles.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>Autor: {post.author}</p>
              <p>Fecha: {new Date(post.createdAt).toLocaleDateString()}</p>
              <p>Likes: {post.likes}</p>
              <button onClick={() => onLike(post.id)}>Like</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
