import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [StudentsModule, MongooseModule.forRoot('mongodb+srv://erickBR1:159753mongodb@mackenzie.xejrfgr.mongodb.net/?retryWrites=true&w=majority'), TeacherModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
