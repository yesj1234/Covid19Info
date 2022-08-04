const Post = require("../models/postModel");
const asyncHandler = require("express-async-handler");

// @description Get board and posts
// @route       GET /api/board
// @access      Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});
  return res.json(posts);
});

// @description Get board and posts
// @route       GET /api/board
// @access      Public
const getSinglePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

// @description Create post
// @route       GET /api/board/create
// @access      Private
const CreatePost = asyncHandler(async (req, res) => {
  const { content } = req.body;

  if (!content) {
    res.status(400);
    throw new Error("Please Fill the content");
    return;
  } else {
    const post = new Post({ user: req.user._id, content });
    const createdPost = await post.save();
    res.status(201).json(createdPost);
  }
});

// @description Update or Edit post
// @route       PUT /api/board
// @access      Private
const DeletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }
  if (post) {
    await post.remove();
    res.json({ message: "Post Removed" });
  } else {
    res.status(404);
    throw new Error("Post not Found");
  }
});

// @description Delete single post
// @route       GET /api/board
// @access      Private
const UpdatePost = asyncHandler(async (req, res) => {
  const { content } = req.body;
  const post = await Post.findById(req.params.id);
  if (post.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }
  if (post) {
    post.content = content;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } else {
    res.status(404);
    throw new Error("Post not found");
  }
});

module.exports = {
  getSinglePost,
  getPosts,
  CreatePost,
  DeletePost,
  UpdatePost,
};
