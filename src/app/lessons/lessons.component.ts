import { Component, Input } from '@angular/core';
import { LessonsService } from './lessons.service';
import { LessonComponent } from './lesson/lesson.component';
import { NewLessonComponent } from './lesson/new-lesson/new-lesson.component';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [LessonComponent,NewLessonComponent],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css'
})
export class LessonsComponent {
  @Input({required: true}) courseId!: string;
  @Input({required: true}) name!: string;
  isAddingLesson = false;

  constructor( private lessonsService: LessonsService ) {

  }

  get selectedCourseLessons() {
     return this.lessonsService.getCourseLessons(this.courseId);
  }

  onStartAddLesson(){
    this.isAddingLesson = true;
  }

  onCloseAddLesson(){
    this.isAddingLesson = false;
  }
}
