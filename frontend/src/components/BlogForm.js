import { useState } from "react";
import { useBlogsContext } from "../hooks/useBlogsContext";

const BlogForm = () => {
  const { dispatch } = useBlogsContext();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

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
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setAuthor("");
      setBody("");
      setError(null);
      setEmptyFields([]);
      console.log("new blog added");
      dispatch({ type: "CREATE_BLOG", payload: json });
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
        className={emptyFields.includes("title") ? "error" : ""}
      />
      <label>Blog Author:</label>
      <input
        type="text"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
        className={emptyFields.includes("author") ? "error" : ""}
      />
      <label>Blog Body:</label>
      <input
        type="text"
        onChange={(e) => setBody(e.target.value)}
        value={body}
        className={emptyFields.includes("body") ? "error" : ""}
      />
      <button>Add Blog</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default BlogForm;
