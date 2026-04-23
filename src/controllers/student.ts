import type { Request, Response } from "express";
import { Student } from "../models/student.js";
import bcrypt from "bcrypt";


export const getAllStudents = async (req: Request, res: Response) => {
    try {
        const students = await Student.find();
        res.status(200).send(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students' });
    }
      
}


export const createStudent = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const newStudent = await Student.create(data);
        await newStudent.save();
        res.status(201).json({ message: 'Student created successfully', student: newStudent });
    } catch (error) {
        res.status(500).json({ message: 'Error creating student' });
    }
}

export const updateStudent =  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { fullName, email, password } = req.body;
    try {
        const updatedStudent = await Student.findByIdAndUpdate(id, { fullName, email, password }, { new: true });
        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(204).json({ message: 'Student updated successfully', student: updatedStudent });
    } catch (error) {
        res.status(500).json({ message: 'Error updating student' });
    }
}


export const deleteStudent = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedStudent = await Student.findByIdAndDelete(id);
        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
        
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student' });
    }
}

export const registerStudent = async (req: Request, res: Response) => {
    try {
        const {fullName, email, password } = req.body;

        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: 'Email or password not vaild' });
        }
        //Hash Password
         const hashedPassword = await bcrypt.hash(password, 10);

        const newStudent = new Student({ fullName, email, password: hashedPassword });

        await newStudent.save();

        res.status(201).json({ message: 'Student registered successfully', student: newStudent });
    }catch(error){
        res.status(500).json({ message: 'Error registering student' });
    }
}

