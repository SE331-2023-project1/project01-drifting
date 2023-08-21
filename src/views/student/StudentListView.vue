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
const pageSize = ref(6);
StudentService.getStudents(6, props.page)
  .then((response: AxiosResponse<Student[]>) => {
    students.value = response.data;
    totalStudent.value = response.headers["x-total-count"];
  })
  .catch(() => {
    router.push({ name: "NetworkError" });
  });

onBeforeRouteUpdate((to, from, next) => {
  const toPage = Number(to.query.page);

  StudentService.getStudents(4, toPage)
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
  <main class="events">
    <div class="container">
      <StudentCard
        v-for="student in students"
        :key="student.studentId"
        :student="student"
      ></StudentCard>
    </div>
    <div class="flex"></div>
    <div class="pagination flex justify-between items-center mt-8">
      <div>
        <RouterLink
          :to="{ name: 'students', query: { page: page - 1 } }"
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
          :to="{ name: 'students', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
          class="btn btn-blue "
        >
          <span class="text-sm font-bold ">
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
  grid-template-columns: repeat(3, 1fr); /* Change from 3 to 2 */
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
  background-color: rgb(176, 186, 245);
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
