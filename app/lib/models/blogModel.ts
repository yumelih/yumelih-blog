import mongoose, { Model, Document } from "mongoose";
import { Blog } from "../definitions";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  posterImage: String,
  blogMd: String,
});

type BlogModel = Model<Blog & Document> | undefined;

const existingModel = mongoose.model?.("Blog") as BlogModel;

export default existingModel || mongoose.model<Blog>("Blog", blogSchema);
