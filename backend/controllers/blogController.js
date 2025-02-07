const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

// get all blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });
  res.status(200).json(blogs);
};

// get one blogs
const getBlog = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such blog found" }); // looks to check if it is found in the db
  }
  const blog = await Blog.findById(id);
  if (!blog) {
    return res.status(404).json({ error: "No such blog found" });
  }
  res.status(200).json(blog);
};

// create new blogs
const createBlog = async (req, res) => {
  const { title, author, body } = req.body;
  // adds doc to db
  try {
    const blog = await Blog.create({ title, author, body });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a blogs

// update a blogs

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
};
