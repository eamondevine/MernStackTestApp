import { useEffect } from "react";
import { useBlogsContext } from "../hooks/useBlogsContext";
import { useAuthContext } from "../hooks/useAuthContext";
// Import the blog details
import BlogDetails from "../components/BlogDetails";
import BlogForm from "../components/BlogForm";

const Home = () => {
  const { blogs, dispatch } = useBlogsContext();
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchBlogs = async () => {
      //makes the fetch from the backend api (see server file with .use method)
      //originally doing a cross origin, ran into error, proxy def added to json file
      const response = await fetch("/api/blogs", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        //this is the action type ; see useBlogsContext, returning the json array payload
        dispatch({ type: "SET_BLOGS", payload: json });
      }
    };

    if (user) {
      fetchBlogs();
    }
    // done in order to solve dependency warning: if dispatch func were to change, this would run again
  }, [dispatch, user]);

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
