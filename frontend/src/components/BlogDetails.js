import { useBlogsContext } from "../hooks/useBlogsContext";
import { useAuthContext } from "../hooks/useAuthContext";
const BlogDetails = ({ blog }) => {
  const { dispatch } = useBlogsContext();
  const { user } = useAuthContext();
  const handleClick = async () => {
    if (!user) {
      return;
    }
    const response = await fetch("/api/blogs/" + blog._id, {
      method: "DELETE",
      Authorization: `Bearer ${user.token}`,
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_BLOG", payload: json });
    }
  };

  return (
    <div className="blog-details">
      <h3>{blog.title}</h3>
      <p>
        <strong>Author: </strong>
        {blog.author}
      </p>
      <p>
        <strong>Body: </strong>
        {blog.body}
      </p>
      <p>{blog.createdAt}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default BlogDetails;
