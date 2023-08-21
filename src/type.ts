export interface Student {
  name: string;
  surname: string;
  studentId: string;
  profileImage: string;
  courseList: string[];
  teacherId: string;
  comment: [];
}

export interface Teacher {
  teacherId: string;
  name: string;
  surname: string;
  profileImage: string;
}