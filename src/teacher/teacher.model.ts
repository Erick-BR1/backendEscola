import * as mongoose from 'mongoose';

export const TeachertSchema = new mongoose.Schema({
    name: { type: String, required: true},
    tia: { type: Number, required: true},
    course: { type: String, required: true}
});

export interface Teacher extends mongoose.Document {
    id: string,
    name: string,
    tia: string,
    course: string
}