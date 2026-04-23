import mongoose from "mongoose";

interface IStudent extends mongoose.Document {
fullName: string;
email: string;
password: string;
age: number;
class: string;
}

const studentSchema = new mongoose.Schema<IStudent>({
fullName: { type: String, required: true },
email: { type: String, required: true, unique: true },
password: { type: String, required: true },
age: { type: Number },
class: { type: String },
});


export const Student = mongoose.model<IStudent>("Student", studentSchema);