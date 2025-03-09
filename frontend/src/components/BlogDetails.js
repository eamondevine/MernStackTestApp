import { useBlogsContext } from "../hooks/useBlogsContext";
const BlogDetails = ({ blog }) => {
  const { dispatch } = useBlogsContext();
  const handleClick = async () => {
    const response = await fetch("/api/blogs/" + blog._id, {
      method: "DELETE",
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
      <span onClick={handleClick}>Delete</span>
    </div>
  );
};

export default BlogDetails;
