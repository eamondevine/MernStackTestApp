const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

// get all blogs
const getBlogs = async (req, res) => {
  const user_id = req.user._id;
  const blogs = await Blog.find({ user_id }).sort({ createdAt: -1 });
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
  let emptyField = [];
  if (!title) {
    emptyField.push("title");
  }
  if (!author) {
    emptyField.push("author");
  }
  if (!body) {
    emptyField.push("body");
  }
  if (emptyField > 0) {
    return res
      .status(400)
      .json({ error: "Please do not leave any blanks", emptyField });
  }

  // adds doc to db
  try {
    const user_id = req.user._id;
    const blog = await Blog.create({ title, author, body, user_id });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a blogs
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such blog found" });
  }

  const blog = await Blog.findOneAndDelete({ _id: id });
  if (!blog) {
    return res.status(404).json({ error: "No such blog found" });
  }
  res.status(200).json(blog);
};

// update a blogs
const updateBlog = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such blog found" });
  }
  const blog = await Blog.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!blog) {
    return res.status(404).json({ error: "No such blog found" });
  }
  res.status(200).json(blog);
};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog,
};
