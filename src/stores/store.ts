import { defineStore } from 'pinia';
import type { Student } from "@/type";
import type { Teacher } from "@/type";

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    students: [] as Student[],
    teachers: [] as Teacher[],
  }),
  actions: {
    addStudent(student: Student) {
      this.students.push(student);
    },
    addTeacher(teacher: Teacher) {
      this.teachers.push(teacher);
    },
  },
});

