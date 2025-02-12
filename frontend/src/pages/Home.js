import { useEffect, useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      //makes the fetch from the backend api (see server file with .use method)
      //originally doing a cross origin, ran into error, proxy def added to json file
      const response = await fetch("/api/blogs");
      const json = await response.json();

      if (response.ok) {
        //this is an array of workouts gotten from the blog controller file in the back
        setBlogs(json);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="home">
      <div className="blogs">
        {blogs && blogs.map((blog) => <p key={blog._id}>{blog.title}</p>)}
      </div>
    </div>
  );
};

export default Home;
