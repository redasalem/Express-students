import mongoose from "mongoose";
interface IStudent extends mongoose.Document {
    fullName: string;
    email: string;
    age: number;
    class: string;
}
export declare const Student: mongoose.Model<IStudent, {}, {}, {}, mongoose.Document<unknown, {}, IStudent, {}, mongoose.DefaultSchemaOptions> & IStudent & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IStudent>;
export {};
//# sourceMappingURL=student.d.ts.map