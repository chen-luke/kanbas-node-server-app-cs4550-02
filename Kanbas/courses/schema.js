import mongoose from "mongoose"; // load mongoose library
const courseSchema = new mongoose.Schema({
    id:String,
    name: String,
    number: String,
    startDate: String,
    endDate: String,
    department: String,
    credits: Number,
    description: String,
    author: String,
}, 
{collection: "courses"}); 
export default courseSchema;