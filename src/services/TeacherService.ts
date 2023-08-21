import axios from "axios";
import type { AxiosInstance, AxiosResponse } from "axios";
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
  getTeachers(
    perPage: number,
    page: number,
  ): Promise<AxiosResponse<Teacher[]>> {
    return apiClient.get<Teacher[]>(
      "/teachers?_limit=" + perPage + "&_page=" + page,
    );
  },
  getTeacherById(teacherId: string): Promise<AxiosResponse<Teacher>> {
    return apiClient.get<Teacher>(
      "teachers/" + "?teacherId=" + teacherId.toString(),
    );
  },
};
