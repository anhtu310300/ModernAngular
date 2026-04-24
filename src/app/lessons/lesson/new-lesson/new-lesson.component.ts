import { Component, EventEmitter } from '@angular/core';
import { Input,Output, inject } from '@angular/core';
import { LessonsService } from '../../lessons.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-lesson',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-lesson.component.html',
  styleUrl: './new-lesson.component.css'
})
export class NewLessonComponent {
  @Input({required: true}) courseId!: string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = ('');
  enteredSummary = ('');
  enteredDate = ('');
  enteredUrl = ('');

  private lessonsService = inject(LessonsService)

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    this.lessonsService.addLesson({
    title: this.enteredTitle,
    summary: this.enteredSummary,
    date: this.enteredDate,
    url: this.enteredUrl
    },
    this.courseId);
    this.close.emit();
  }
}
