import { Injectable, NotFoundException } from '@nestjs/common';
import { Teacher } from './teacher.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TeacherService {

    constructor( @InjectModel('Teacher') private readonly teacherModel: Model<Teacher>){}

    async createTeacher(teacher: Teacher){
        const teacherModel = new this.teacherModel(
            {
                nome: teacher.name,
                tia: teacher.tia,
                curso: teacher.course
            }
        );
        const result = await teacherModel.save();
        return result.id as string;
    }

    async readTeachers(){
        const teachers = await this.teacherModel.find().exec();
        return teachers
    }

    async updateTeacher(teacher:Teacher){
        const updateTeacher = await this.teacherModel.findOne({tia: teacher.tia});
        if (!updateTeacher){
            throw new NotFoundException('Could not find the teacher.');
        }
        if (teacher.name){
            updateTeacher.name = teacher.name
        }
        if (teacher.course){
            updateTeacher.course = teacher.course
        }
        updateTeacher.save()
    }

    async deleteTeacher(tia: number){
        const result = await this.teacherModel.deleteOne({tia: tia}).exec();
        if (result.n === 0){
            throw new NotFoundException('Could not delete the teacher')
        }
    }
}
