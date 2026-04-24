import { Component, EventEmitter,Input, Output } from '@angular/core';
import { Course } from './course.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-course',
  standalone: true,
  templateUrl: './course.component.html',
  styleUrl: './course.component.css',
  imports: [CardComponent]
})
export class CourseComponent {
  @Input({required: true}) course!: Course;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath(){
    return 'assets/course/' + this.course.logo;
  }

  onSelectCourse() {
    this.select.emit(this.course.id);
  }
}
