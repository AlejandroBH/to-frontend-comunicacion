import { Router } from "express";
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/postController.js";
import {
  createPostValidator,
  updatePostValidator,
  idParamValidator,
} from "../middlewares/postValidator.js";

const postRouter = Router();

// Rutas para posts
postRouter.get("/", getAllPosts);
postRouter.get("/:id", idParamValidator, getPostById);
postRouter.post("/", createPostValidator, createPost);
postRouter.put("/:id", updatePostValidator, updatePost);
postRouter.delete("/:id", idParamValidator, deletePost);
postRouter.patch("/:id/like", idParamValidator, likePost);

export default postRouter;
