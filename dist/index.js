import express from "express";
import mongoose from "mongoose";
import studentRouter from "./routers/student.js";
const app = express();
app.use(express.json());
const PORT = 5000;
mongoose.connect('mongodb://127.0.0.1:27017/students')
    .then(() => console.log('mongo Connected!'))
    .catch((err) => console.log('Connection Error:', err));
// Routes FOR STUDENTS
app.use('/students', studentRouter);
app.listen(PORT, () => {
    console.log(`app Is running in ${PORT}`);
});
//# sourceMappingURL=index.js.map