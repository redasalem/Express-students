import express from 'express';
import { Student } from '../models/student.js';
import { createStudent, deleteStudent, getAllStudents, updateStudent } from '../controllers/student.js';
const router = express.Router();
// GET ALL STUDENTS
router.get('/', getAllStudents);
// CREATE A NEW STUDENT
router.post('/', createStudent);
// UPDATE A STUDENT
router.put('/:id', updateStudent);
// DELETE A STUDENT
router.delete('/:id', deleteStudent);
export default router;
//# sourceMappingURL=student.js.map