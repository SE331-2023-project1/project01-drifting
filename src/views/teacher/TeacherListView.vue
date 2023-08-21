<script setup lang="ts">
import TeacherCard from "../../components/TeacherCard.vue";
import type { Teacher } from "@/type";
import TeacherService from "@/services/TeacherService";
import type { AxiosResponse } from "axios";
import { ref, type Ref, watchEffect, computed } from "vue";

const teachers: Ref<Array<Teacher>> = ref([]);
const totalTeacher = ref<number>(10);
const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
});
const pageSize = ref(3); //Defualt page size

watchEffect(() => {
  TeacherService.getTeachers(pageSize.value, props.page).then(
    (response: AxiosResponse<Teacher[]>) => {
      teachers.value = response.data;
      totalTeacher.value = response.headers["x-total-count"];
    },
  );
});

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalTeacher.value / pageSize.value);
  return props.page.valueOf() < totalPages;
});
</script>

<template>
   <main class="flex flex-col items-center">
    <div class="container mt-12 grid grid-cols-3 place-items-center gap-12">
      <TeacherCard
        v-for="teacher in teachers"
        :key="teacher.teacherId"
        :teacher="teacher"
      ></TeacherCard>
    </div>
    <div class="flex flex-1"></div>
    <div class="pagination flex justify-between items-center mt-8 w-80">
      <div>
        <RouterLink
          :to="{ name: 'teachers', query: { page: page - 1 } }"
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
          :to="{ name: 'teachers', query: { page: page + 1 } }"
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
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  row-gap: 3rem;
}

</style>
