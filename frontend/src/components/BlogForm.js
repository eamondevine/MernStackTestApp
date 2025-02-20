import { useState } from "react";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blog = { title, author, body };

    const response = await fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setAuthor("");
      setBody("");
      setError(null);
      console.log("new blog added");
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h2>Add new blog</h2>
      <label>Blog Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Blog Author:</label>
      <input
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
      />
      <label>Blog Body:</label>
      <input
        type="text"
        onChange={(e) => setBody(e.target.value)}
        value={body}
      />
      <button>Add Blog</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default BlogForm;
