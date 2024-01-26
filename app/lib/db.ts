import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

const connect = async () => {
  try {
    await mongoose.connect(uri as string);
    console.log("Mongo connection successful");
  } catch (err) {
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connect;
