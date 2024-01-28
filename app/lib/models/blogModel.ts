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

let blogModel: BlogModel;

if (mongoose.models.Blog) {
  blogModel = mongoose.models.Blog as BlogModel;
} else {
  blogModel = mongoose.model<Blog & Document>("Blog", blogSchema);
}

export default blogModel;
