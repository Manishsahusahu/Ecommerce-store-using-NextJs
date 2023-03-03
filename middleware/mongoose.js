import mongoose from "mongoose";

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // checking if first connection is connected or not means connection exist or not
    return handler(req, res);
  }
  await mongoose.connect(process.env.MONGO_URI);
  return handler(req, res);
};
export default connectDb;
