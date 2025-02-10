import { useEffect, useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      //makes the fetch from the backend api (see server file with .use method)
      const response = await fetch("http://localhost:4000/api/blogs");
      const json = response.json();

      if (response.ok) {
        //this is an array of workouts gotten from the blog controller file in the back
        setBlogs(json);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="home">
      <div className="blogs"></div>
    </div>
  );
};

export default Home;
