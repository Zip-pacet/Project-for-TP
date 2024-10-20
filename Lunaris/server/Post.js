import mongoose from "mongoose";

const Post = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  body: { type: String, required: true },
  picture: { type: String },
});

export default mongoose.model("Post", Post);
