import { Student } from "../models/student.js";
export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).send(students);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching students' });
    }
};
export const createStudent = async (req, res) => {
    try {
        const data = req.body;
        const newStudent = await Student.create(data);
        await newStudent.save();
        res.status(201).json({ message: 'Student created successfully', student: newStudent });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating student' });
    }
};
export const updateStudent = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const updatedStudent = await Student.findByIdAndUpdate(id, data, { new: true });
        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(204).json({ message: 'Student updated successfully', student: updatedStudent });
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating student' });
    }
};
export const deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedStudent = await Student.findByIdAndDelete(id);
        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting student' });
    }
};
//# sourceMappingURL=student.js.map