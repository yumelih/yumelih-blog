import connect from "./db";

connect().then(() => {
  console.log("connection successfull");
});

export async function getAllBlogs() {
  try {
  } catch (err) {}
}
