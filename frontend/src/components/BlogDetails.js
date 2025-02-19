const BlogDetails = ({ blog }) => {
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
    </div>
  );
};

export default BlogDetails;
