import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    class: { type: String },
});
export const Student = mongoose.model("Student", studentSchema);
//# sourceMappingURL=student.js.map