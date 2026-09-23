import mongoose from "mongoose";

const connetDb = async (DATABASE_URL) => {
  await mongoose.connect(DATABASE_URL);
  console.log(`DB connected`);
};

export default connetDb;
