import mongoose from "mongoose";
import moongose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("DB connected"));
  await moongose.connect(`${process.env.MONGODB_URI}/prescripto`);
};

export default connectDB;
