const express = require("express");
const {
  getBlogs,
  getBlog,
  createBlog,
} = require("../controllers/blogController");

const router = express.Router();

// GET all the blogs
router.get("/", getBlogs);

// GET one of the blogs
router.get("/:id", getBlog);

// POST a new blog
router.post("/", createBlog);

// DELETE a single blog
router.delete("/:id", (req, res) => {
  res.json({ mssg: "Delete a single blog" });
});

// UPDATE a single blog
router.patch("/:id", (req, res) => {
  res.json({ mssg: "Update a blog" });
});

module.exports = router;
