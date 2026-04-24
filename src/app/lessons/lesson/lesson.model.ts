export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  summary: string;
  dueDate: string;
  url: string;
}

export interface NewLessonData {
  title: string;
  summary: string;
  date: string;
  url: string;
}