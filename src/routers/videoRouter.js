import express from "express";
import {
  watch,
  getEdit,
  getUpload,
  postEdit,
  postUpload,
  deleteVideo,
} from "../controllers/videoController.js";
import { protectorMiddleware } from "../middlewares.js";
const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter
  .route("/:id([0-9a-f]{24})/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter
  .route("/:id([0-9a-f]{24})/delete")
  .all(protectorMiddleware)
  .get(deleteVideo);
videoRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(postUpload);

export default videoRouter;
