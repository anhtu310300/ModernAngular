import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { CourseComponent } from './course/course.component';
import { DUMMY_COURSES } from './dummy-courses';
import { LessonsComponent } from './lessons/lessons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,CourseComponent,LessonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  courses = DUMMY_COURSES;
  selectedCourseId?: string;

  get selectedCourse(){
     return this.courses.find((course)=> course.id === this.selectedCourseId )!;
  }
  
  onSelectCourse(id: string) {
    this.selectedCourseId = id;
  }
}
