import { useEffect } from "react";
// Import the blog details
import BlogDetails from "../components/BlogDetails";
import BlogForm from "../components/BlogForm";
import { useBlogsContext } from "../hooks/useBlogsContext";

const Home = () => {
  const { blogs, dispatch } = useBlogsContext();
  useEffect(() => {
    const fetchBlogs = async () => {
      //makes the fetch from the backend api (see server file with .use method)
      //originally doing a cross origin, ran into error, proxy def added to json file
      const response = await fetch("/api/blogs");
      const json = await response.json();

      if (response.ok) {
        //this is the action type ; see useBlogsContext, returning the json array payload
        dispatch({ type: "SET_BLOGS", payload: json });
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="home">
      <div className="blogs">
        {blogs &&
          blogs.map((blog) => <BlogDetails key={blog._id} blog={blog} />)}
      </div>
      <BlogForm />
    </div>
  );
};

export default Home;
