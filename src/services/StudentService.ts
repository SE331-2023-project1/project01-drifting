// src/services/StudentService.ts
import type { AxiosInstance, AxiosResponse } from "axios";
import type { StudentItem } from "../type";
import axios from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3003',
  // Other configuration items
});

export default {
  getStudents(perPage: number, page: number): Promise<AxiosResponse<StudentItem[]>> {
    return apiClient.get<StudentItem[]>('/students?_limit=' + perPage + '&_page=' + page);
  },
  getStudentById(id: number): Promise<AxiosResponse<StudentItem>> {
    return apiClient.get<StudentItem>('/students/' + id.toString());
  },
  getEventById(id: number): Promise<AxiosResponse<StudentItem>> {
    return apiClient.get<StudentItem>('/students/' + id.toString());
  }
  
}
