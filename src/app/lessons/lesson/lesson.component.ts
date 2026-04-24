import { Component, Input,inject } from '@angular/core';
import { Lesson } from './lesson.model';
import { DatePipe } from '@angular/common';
import { LessonsService } from '../lessons.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [DatePipe,CardComponent],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent {
@Input({required:true}) lesson!: Lesson;

private lessonsService = inject(LessonsService)

  onCompleteLesson(){
    this.lessonsService.removeLesson(this.lesson.id);
  }
}
