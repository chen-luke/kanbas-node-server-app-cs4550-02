import courseModel from "./model.js";

export const createCourse = (course) => {
    delete course._id; // double check if this is needed
    return courseModel.create(course);
};

export const findAllCourses = () => courseModel.find();
export const findCourseById = (courseId) => courseModel.findById(courseId);
//export const findCourseByCourseName = (coursename) =>  courseModel.findOne({ coursename: coursename });
// export const findCourseByCredentials = (coursename, password) =>  courseModel.findOne({ coursename, password });
export const updateCourse = (courseId, course) =>  courseModel.updateOne({ _id: courseId }, { $set: course });
export const deleteCourse = (courseId) => courseModel.deleteOne({ _id: courseId });