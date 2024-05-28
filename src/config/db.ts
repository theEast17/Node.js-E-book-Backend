import mongoose from "mongoose";
import { config } from "./config";

const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("connected");
    });
    mongoose.connection.on("error", (err) => {
      console.log("connected error");
    });
    await mongoose.connect(config.database_url as string);
  } catch (err) {
    console.log("failed to connect");
    process.exit(1);
  }
};

export default connectDb;
