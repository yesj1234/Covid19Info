const express = require("express");
const {
  getPosts,
  getSinglePost,
  CreatePost,
  DeletePost,
  UpdatePost,
} = require("../controllers/boardController");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");

router.route("/").get(getPosts);
router
  .route("/:id")
  .get(getSinglePost)
  .delete(protect, DeletePost)
  .put(protect, UpdatePost);
router.route("/create").post(protect, CreatePost);

module.exports = router;
