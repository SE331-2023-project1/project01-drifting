<script setup lang="ts">
import StudentCard from "../../components/StudentCard.vue";
import type { Student } from "@/type";
import StudentService from "@/services/StudentService";
import type { AxiosResponse } from "axios";
import { ref, type Ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import { onBeforeRouteUpdate } from "vue-router";
import { useFlashMessageStore } from "@/stores/flashMessage";
import { onBeforeUnmount } from "vue";

const students: Ref<Array<Student>> = ref([]);
const noMorePagesMessageVisible: Ref<boolean> = ref(false);
let timeoutId: number | null = null;
const { message } = useFlashMessageStore();
const loading = ref(false);
const flashMessageStore = useFlashMessageStore();
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
    loading.value = false;
  })
  .catch(() => {
    router.push({ name: "NetworkError" });
    loading.value = false;
  });

onBeforeRouteUpdate((to, from, next) => {
  loading.value = true;
  const toPage = Number(to.query.page);

  StudentService.getStudents(3, toPage)
    .then((response: AxiosResponse<Student[]>) => {
      students.value = response.data;
      totalStudent.value = response.headers["x-total-count"];
      loading.value = false;
      next();
    })
    .catch(() => {
      loading.value = false;
      next({ name: "NetworkError" });
    });
});

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalStudent.value / pageSize.value);
  return props.page.valueOf() < totalPages;
});

watch(loading, (newVal) => {
  if (newVal) {
    flashMessageStore.showMessage("Loading..."); // Add the loading text here
  } else {
    flashMessageStore.clearMessage(); // Using clearMessage instead of hideMessage
  }
});

watch(hasNextPage, (newVal) => {
  if (!newVal) {
    noMorePagesMessageVisible.value = true;
    timeoutId = setTimeout(() => {
      noMorePagesMessageVisible.value = false;
    }, 2000); // Display for 2 seconds
  } else {
    noMorePagesMessageVisible.value = false;
    if (timeoutId !== null) {
      clearTimeout(timeoutId); // Clear the timeout if it was set
    }
  }
});

onBeforeUnmount(() => {
  if (timeoutId !== null) {
    clearTimeout(timeoutId); // Clear the timeout when the component is unmounted
  }
});
</script>

<template>
  <div v-if="loading" class="text-center py-4 lg:px-4 transition ease-out duration-300">
    <div class="p-2 bg-[rgb(29,161,242)] items-center text-indigo-100 leading-none lg:rounded-md flex lg:inline-flex"
      role="alert">
      <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-500"
        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor" />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill" />
      </svg>
      <span class="font-semibold mr-2 text-left flex-auto">Please wait for get data........</span>
    </div>
  </div>
  <div v-if="noMorePagesMessageVisible" class="text-center py-4 lg:px-4 transition-all ease-out duration-300"
    :class="{ 'opacity-0': !noMorePagesMessageVisible }">

    <div class="text-center py-3 lg:px-3 bg-red-100 border border-red-400 text-red-700 px-4 rounded-md relative"
      role="alert">

      <strong class="font-bold">oh,oho </strong>
      <span class="block sm:inline">There are no more pages left</span>
      <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
      </span>
    </div>
  </div>
  <main class="flex flex-col items-center">
    <div class="container mt-12 grid grid-cols-3 place-items-center gap-12">
      <StudentCard v-for="student in students" :key="student.studentId" :student="student"></StudentCard>
    </div>
    <div class="flex flex-1"></div>
    <div class="pagination flex justify-between items-center mt-8 w-80">
      <div>
        <RouterLink :to="{ name: 'students', query: { page: page - 1 } }" rel="prev" v-if="page != 1"
          class="px-4 py-2 bg-[rgb(29,161,242)] hover:bg-[rgb(29,161,242)] rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-50 flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
          </svg>

          <span>Prev Page</span>
        </RouterLink>
      </div>
      <div>
        <RouterLink :to="{ name: 'students', query: { page: page + 1 } }" rel="next" v-if="hasNextPage"
          class="px-4 py-2 bg-[rgb(29,161,242)] hover:bg-[rgb(29,161,242)] rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-50 flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
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
  grid-template-columns: repeat(3, 1fr);
  /* Change from 3 to 2 */
  place-items: center;
  row-gap: 2rem;
}
</style>
