<script setup lang="ts">
import StudentCard from "../../components/StudentCard.vue";
import type { Student } from "@/type";
import StudentService from "@/services/StudentService";
import type { AxiosResponse } from "axios";
import { ref, type Ref, computed } from "vue";
import { useRouter } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";

const students: Ref<Array<Student>> = ref([]);
const totalStudent = ref<number>(10);
const router = useRouter();
const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
});
const pageSize = ref(3);
StudentService.getStudents(3, props.page)
  .then((response: AxiosResponse<Student[]>) => {
    students.value = response.data;
    totalStudent.value = response.headers["x-total-count"];
  })
  .catch(() => {
    router.push({ name: "NetworkError" });
  });

onBeforeRouteUpdate((to, from, next) => {
  const toPage = Number(to.query.page);

  StudentService.getStudents(3, toPage)
    .then((response: AxiosResponse<Student[]>) => {
      students.value = response.data;
      totalStudent.value = response.headers["x-total-count"];
      next();
    })
    .catch(() => {
      next({ name: "NetworkError" });
    });
});

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalStudent.value / pageSize.value);
  return props.page.valueOf() < totalPages;
});
</script>

<template>
  <main class="flex flex-col items-center">
    <div class="container mt-12 grid grid-cols-3 place-items-center gap-12">
      <StudentCard
        v-for="student in students"
        :key="student.studentId"
        :student="student"
      ></StudentCard>
    </div>
    <div class="flex flex-1"></div>
    <div class="pagination flex justify-between items-center mt-8 w-80">
      <div>
        <RouterLink
          :to="{ name: 'students', query: { page: page - 1 } }"
          rel="prev"
          v-if="page != 1"
          class="px-4 py-2 bg-[rgb(29,161,242)] hover:bg-[rgb(29,161,242)] rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-50 flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>

          <span>Prev Page</span>
        </RouterLink>
      </div>
      <div>
        <RouterLink
          :to="{ name: 'students', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
          class="px-4 py-2 bg-[rgb(29,161,242)] hover:bg-[rgb(29,161,242)] rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-50 flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>

          <span>Next Page</span>
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>

.container {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Change from 3 to 2 */
  place-items: center;
  row-gap: 2rem;
}
</style>
