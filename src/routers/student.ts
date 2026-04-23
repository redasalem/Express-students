import express from 'express';
import { createStudent, deleteStudent, getAllStudents, registerStudent, updateStudent } from '../controllers/student.js';

const router = express.Router();

// GET ALL STUDENTS
router.get('/', getAllStudents);

// CREATE A NEW STUDENT
router.post('/', createStudent);

// UPDATE A STUDENT
router.put('/:id',updateStudent);

// DELETE A STUDENT
router.delete('/:id', deleteStudent);

//Register
router.post('/register', registerStudent);

export default router;