const express = require('express');

const router = express.Router();

// GET all the blogs
router.get('/', (req, res) => {
    res.json({mssg: 'Get all blogs'})
});

// GET ONE of the blogs
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get one blog'})
});

// POST a single blog
router.post('/', (req, res) => {
    res.json({mssg: 'Post a new blog'})
});

// DELETE a single blog
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a single blog'})
});

// UPDATE a single blog
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a blog'})
});


module.exports = router