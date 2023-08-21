import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";
import type { Student } from "@/type";
import type { Teacher } from "@/type";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://my-json-server.typicode.com/Cosmos-52/331-project1-RESTapi",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getStudents(
    perPage: number,
    page: number,
  ): Promise<AxiosResponse<Student[]>> {

    return apiClient.get<Student[]>(
      "/students?_limit=" + perPage + "&_page=" + page,
    );
  },
  getStudentById(studentId: string): Promise<AxiosResponse<Student>> {
    return apiClient.get<Student>(
      "students/" + "?studentId=" + studentId.toString(),
    );
  },

  getTeacherByTeacherID(teacherId: string): Promise<AxiosResponse<Teacher>> {
    return apiClient.get<Teacher>("teachers/" + "?teacherId=" + teacherId);
  },
  getTeacherByStudent(student: Student): Promise<AxiosResponse<Teacher>> {
    return this.getTeacherByTeacherID(student.teacherId);
  },
};

export function provideStudentService() {
  provide(studentServiceSymbol, useStudentService());
}

export function injectStudentService() {
  return inject(studentServiceSymbol) as ReturnType<typeof useStudentService>;
}
