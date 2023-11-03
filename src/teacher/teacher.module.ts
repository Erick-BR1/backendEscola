import { Module } from '@nestjs/common';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { TeachertSchema } from './teacher.model';

@Module({
  imports: [TeacherModule, MongooseModule.forFeature([{name: 'Teacher', schema: TeachertSchema}])],
  controllers: [TeacherController],
  providers: [TeacherService]
})

export class TeacherModule {}

export const TeacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  course: { type: String, requised: true }
})

