import mongoose from "mongoose"; // load mongoose library
const userSchema = new mongoose.Schema({ // Create the schema
    username: { type: String, required: true, unique: true }, // string field that is required and unique
    password: { type: String, required: true }, // string field that is required but not unique
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    role: {
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
      default: "USER",},
  },
  { collection: "users" }); // store data in user collection
export default userSchema;


