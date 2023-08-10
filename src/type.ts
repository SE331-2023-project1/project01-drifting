export interface StudentItem {
  name: string;
  surname: string;
  studentId: number;
  profileImage: string;
  courseList: string[];
  teacherId: string;
  comment: string;

}

export interface TeacherItem {
  name: string;
  surname: string;
  profileImage: string;
  teacherId: string;
}