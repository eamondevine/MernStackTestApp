const express = require("express");
const {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogController");

const router = express.Router();

// GET all the blogs
router.get("/", getBlogs);

// GET one of the blogs
router.get("/:id", getBlog);

// POST a new blog
router.post("/", createBlog);

// DELETE a single blog
router.delete("/:id", deleteBlog);

// UPDATE a single blog
router.patch("/:id", updateBlog);

module.exports = router;
