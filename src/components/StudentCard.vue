<!-- StudentCard.vue -->

<template>
  <div class="space-y-8 py-6">
    <div v-for="student in students" :key="student.studentId"
      class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 hover:bg-gray-200"
      @click="gotoStudent(Number(student.studentId))">
      <img :src="student.profileImage" alt="Profile Image" class="w-32 h-50 object-cover absolute top-1/2 right-10 max-w-none -translate-y-1/2" />
      <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
        <li class="flex items-center">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 18 20">
            <path
              d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
          </svg>
          <p class="ml-4">Name :{{ student.name }} {{ student.surname }}</p>
        </li>
        <li class="flex items-center">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 20 20">
            <path fill="currentColor"
              d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z" />
            <path fill="#fff"
              d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z" />
          </svg>
          <p class="ml-4">Student ID :{{ student.studentId }}</p>
        </li>
    
      </div>
    </div>
    <div class="flex justify-between mt-4"> <!-- 使用flex和justify-between来分隔按钮 -->
      <button
        class="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded"
        v-if="currentPage > 1" @click="prevPage">Prev</button>
      <button
        class="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded"
        v-if="students.length === perPage" @click="nextPage">Next</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import StudentService from "../services/StudentService";
import { type StudentItem } from "../type";

export default defineComponent({
  props: {
    perPage: {
      type: Number,
      default: 3,
    },
  },
  setup(props) {
    const students = ref<StudentItem[]>([]);
    const currentPage = ref(1);
    const router = useRouter(); // Get the router instance

    const loadStudents = async () => {
      const response = await StudentService.getStudents(
        props.perPage,
        currentPage.value
      );
      students.value = response.data;
    };

    const gotoStudent = (id: number) => {
      router.push({ name: "StudentDetail", params: { studentId: id } }); // Redirect to student details page
    };

    const nextPage = () => {
      currentPage.value += 1;
      loadStudents();
    };

    const prevPage = () => {
      currentPage.value -= 1;
      loadStudents();
    };

    loadStudents();

    return { students, gotoStudent, nextPage, prevPage, currentPage };
  },
});
</script>

<style scoped>
.student-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}</style>
