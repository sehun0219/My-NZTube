import mongoose from "mongoose";
const commentsSchema = new mongoose.Schema({
  text: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  video: { type: mongoose.Schema.Types.ObjectId, ref: "Video", required: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

const Comment = mongoose.model("Comment", commentsSchema);

export default Comment;
