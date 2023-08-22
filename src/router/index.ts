import { createRouter, createWebHistory } from "vue-router";
import Student from "../views/student/StudentListView.vue";
import StudentDetailView from "@/views/student/StudentDetailView.vue";
import StudentLayoutView from "@/views/student/StudentLayoutView.vue";
import Teacher from "../views/teacher/TeacherListView.vue";
import TeacherDetailView from "@/views/teacher/TeacherDetailView.vue";
import TeacherLayoutView from "@/views/teacher/TeacherLayoutView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import NProgress from "nprogress";
import { useEventStore, useTeacherStore } from "../stores/event";
import StudentService from "../services/StudentService";
import TeacherService from "../services/TeacherService";

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
      beforeEnter: (to) => {
        const studentId: string = to.params.studentId as string;
        const eventStore = useEventStore();
        return StudentService.getStudentById(studentId)
          .then((response) => {
            if (response.data.length === 0) {
              return { name: '404-resource', params: { resource: 'student' } };
            } else {
              eventStore.setEvent(response.data[0]);
            }
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              return { name: '404-resource', params: { resource: 'student' } };
            } else {
              return { name: 'network-error' };
            }
          });
      },
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
      beforeEnter: (to) => {
        const teacherId: string = to.params.teacherId as string;
        const TeachereventStore = useTeacherStore();
        return TeacherService.getTeacherById(teacherId)
          .then((response) => {
            if (response.data.length === 0) {
              return { name: '404-resource', params: { resource: 'teacher' } };
            }else {
              TeachereventStore.setEvent(response.data[0]);
            }
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              return { name: '404-resource', params: { resource: 'teacher' } };
            } else {
              return { name: 'network-error' };
            }
          });
      },
      children: [
        {
          path: "",
          name: "teacher-detail",
          component: TeacherDetailView,
          props: true,
        },
      ],
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundView
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition){
      return savedPosition
    }else{
      return { top: 0 }
    }
  }
});

router.beforeEach(() => {
  NProgress.start();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;

