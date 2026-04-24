import { Injectable } from "@angular/core"
import { NewLessonData } from "./lesson/lesson.model";


@Injectable({providedIn: 'root'})
export class LessonsService {
     private lessons = [
  {
    id: 'l1',
    courseId: 'c1',
    title: 'HTML Semantic Structure',
    summary: 'Use semantic tags like header, main, section to build meaningful layouts.',
    dueDate: '2026-05-01',
    url: 'https://www.coursera.org/learn/html-css-javascript-for-web-developers'
  },
  {
    id: 'l2',
    courseId: 'c2',
    title: 'CSS Flexbox Basics',
    summary: 'Learn how to align and distribute elements using flexbox.',
    dueDate: '2026-05-02',
    url: 'https://www.udemy.com/course/css-flexbox/'
  },
  {
    id: 'l3',
    courseId: 'c3',
    title: 'JavaScript Promises',
    summary: 'Understand asynchronous programming with promises and chaining.',
    dueDate: '2026-05-03',
    url: 'https://www.coursera.org/learn/javascript'
  },
  {
    id: 'l4',
    courseId: 'c4',
    title: 'Angular Input & Output',
    summary: 'Learn how components communicate using Input and Output decorators.',
    dueDate: '2026-05-04',
    url: 'https://www.udemy.com/course/the-complete-guide-to-angular-2/'
  },
  {
    id: 'l5',
    courseId: 'c5',
    title: 'Node.js File System',
    summary: 'Work with files using the fs module in Node.js.',
    dueDate: '2026-05-05',
    url: 'https://www.udemy.com/course/nodejs-the-complete-guide/'
  },
  {
    id: 'l6',
    courseId: 'c6',
    title: 'Express Routing',
    summary: 'Create and handle routes using Express.js.',
    dueDate: '2026-05-06',
    url: 'https://expressjs.com/en/guide/routing.html'
  },
  {
    id: 'l7',
    courseId: 'c7',
    title: 'MongoDB CRUD Operations',
    summary: 'Learn how to create, read, update and delete documents in MongoDB.',
    dueDate: '2026-05-07',
    url: 'https://www.mongodb.com/docs/manual/crud/'
  }
];

constructor(){
        const lessons = localStorage.getItem('lessons')

        if (lessons) {
            this.lessons = JSON.parse(lessons);
        }
    }

    getCourseLessons(courseId: string) {
        return this.lessons.filter((lesson) => lesson.courseId === courseId);
    }

    addLesson(lessonData: NewLessonData, courseId: string){
        this.lessons.unshift({
            id: new Date().getTime().toString(),
            courseId: courseId,
            title: lessonData.title,
            summary: lessonData.summary,
            dueDate: lessonData.date,
            url: lessonData.url

        }),
        this.saveLesson();
    }

    private saveLesson() {
        localStorage.setItem('lessons',JSON.stringify(this.lessons));
    }

    removeLesson(id: string){
        this.lessons = this.lessons.filter((lesson)=> lesson.id !== id);
        this.saveLesson();
    }
}