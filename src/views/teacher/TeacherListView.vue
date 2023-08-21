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
const pageSize = ref(4); //Defualt page size

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
  <main class="events">
    <div class="container">
      <TeacherCard
        v-for="teacher in teachers"
        :key="teacher.teacherId"
        :teacher="teacher"
      ></TeacherCard>
    </div>
    <div class="flex"></div>
    <div class="pagination flex justify-between items-center mt-8">
      <div>
        <RouterLink
          :to="{ name: 'teachers', query: { page: page - 1 } }"
          rel="prev"
          v-if="page != 1"
          class="btn btn-blue"
        >
          <span class="text-sm font-bold">
            Prev Page
          </span>
        </RouterLink>
      </div>
      <div>
        <RouterLink
          :to="{ name: 'teachers', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
          class="btn btn-blue"
        >
          <span class="text-sm font-bold">
            Next Page
          </span>
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.flex {
  @apply flex-1;
}
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 340px;
  align-items: baseline;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
.pageSize {
  padding: 0 0 20px 0;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
.container {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  row-gap: 3rem;
}
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin: 1rem;
  text-align: center;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.btn-blue {
  background-color: rgb(189, 198, 250);
  color: white;
}


@media (max-width: 1149px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 859px) {
  .container {
    grid-template-columns: 1fr;
  }
}
</style>
