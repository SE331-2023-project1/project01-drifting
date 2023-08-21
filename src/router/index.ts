import { createRouter, createWebHistory } from "vue-router";
import Student from "../views/student/StudentListView.vue";
import StudentDetailView from "@/views/student/StudentDetailView.vue";
import StudentLayoutView from "@/views/student/StudentLayoutView.vue";
import Teacher from "../views/teacher/TeacherListView.vue";
import TeacherDetailView from "@/views/teacher/TeacherDetailView.vue";
import TeacherLayoutView from "@/views/teacher/TeacherLayoutView.vue";
import NProgress from "nprogress";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "students",
      component: Student,
      props: (route) => ({
        page: parseInt((route.query?.page as string) || "1"),
        pageSize: parseInt((route.query?.page as string) || "2"),
      }),
    },
    {
      path: "/teacher",
      name: "teachers",
      component: Teacher,
      props: (route) => ({
        page: parseInt((route.query?.page as string) || "1"),
        pageSize: parseInt((route.query?.page as string) || "2"),
      }),
    },
    {
      path: "/student/:studentId",
      name: "student-layout",
      component: StudentLayoutView,
      props: true,

      children: [
        {
          path: "",
          name: "student-detail",
          component: StudentDetailView,
          props: true,
        },
      ],
    },
    {
      path: "/teacher/:teacherId",
      name: "teacher-layout",
      component: TeacherLayoutView,
      props: true,

      children: [
        {
          path: "",
          name: "teacher-detail",
          component: TeacherDetailView,
          props: true,
        },
      ],
    },
  ],
});
router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;

