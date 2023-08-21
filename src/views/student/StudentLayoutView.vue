<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { Student } from "@/type";
import StudentService from "@/services/StudentService";
import { Teacher } from "@/type";
import { useCommentsStore } from "@/stores/comment";

const commentsStore = useCommentsStore();

const props = defineProps({
  studentId: String,
  teacherId: String,
});

const student = ref<Student | null>(null);
const teacher = ref<Teacher | null>(null);
const comments = computed(() => {
  if (student.value) {
    return commentsStore.getComments(student.value.studentId);
  }
  return [];
});
const newComment = ref("");

onMounted(async () => {
  const studentResponse = await StudentService.getStudentById(props.studentId);
  student.value = studentResponse.data[0];
});

function submitComment() {
  if (newComment.value.trim() !== "") {
    commentsStore.addComment(student.value.studentId, newComment.value);
    newComment.value = "";
  }
}

StudentService.getStudentById(String(props.studentId))
  .then((studentResponse) => {
    student.value = studentResponse.data[0];

    StudentService.getTeacherByStudent(student.value)
      .then((teacherResponse) => {
        teacher.value = teacherResponse.data[0];
      })
      .catch((error) => {});
  })
  .catch((error) => {});
</script>

<template>
  <main class="container mx-auto w-screen flex">
    <!-- Student&Teacher Info -->
    <div v-if="student" class="space-y-4">
      <h1 class="text-2xl font-bold">Student Information:</h1>
      <div class="p-5 w-auto h-auto rounded-lg bg-gradient-to-b from-[rgb(242,243,244)] m-4 shadow-xl ring-1 ring-gray-900/5">
        <!-- Student Details -->
        <div class="flex items-center space-x-4 mb-4">
          <img class="w-28 h-35 object-cover rounded-md shadow-lg " :src="student.profileImage"/>
          <div>
            <h2 class="text-4xl font-bold mb-2">Name: {{student.name}} {{ student.surname }}</h2>
            <h1 class="text-2xl mb-2">StudentID: {{student.studentId}}</h1>
            <h1 class="text-2xl mb-2">enrolled courses:</h1>
            <h1 class="text-lg mb-2 text-green-500">{{student.courseList}}</h1>
            <h1 class="text-2xl mb-2">profile image link: </h1>
            <a :href="student.profileImage" class="text-sky-500 hover:text-sky-600">Check iamge &rarr;</a>
          </div>
        </div>
      </div>
      <!-- Teacher Details -->
      <h1 class="text-2xl font-bold">Teacher:</h1>
      <div class="p-5 w-80 h-40 flex items-center rounded-lg bg-gradient-to-b from-[rgb(242,243,244)] m-4 shadow-xl ring-1 ring-gray-900/5">
        <img class="w-24 h-24 object-cover rounded-md shadow-lg" :src="teacher?.profileImage"/>
        <div class="ml-4">
          <h1 class="text-2xl">{{teacher?.name}}</h1>
          <h1 class="text-lg">{{teacher?.teacherId}}</h1>
        </div>
      </div>
    </div>
    <div class="w-1/2 p-4">
      <!-- Comments Section -->
      <h1 class="text-2xl font-bold">Given comment:</h1>
      <div class="border-t border-gray-300 p-4 space-y-4 h-auto overflow-y-auto w-auto">
        <h2>All Comments</h2>
        <div v-for="(comment, index) in comments" :key="index">
          <p>{{comment}}</p>
        </div>
        <!-- Add Comment -->
        <div class="border-t border-gray-300 pt-4">
          <h2>Add Comment</h2>
          <div class="comment-box mt-4">
            <textarea v-model="newComment" placeholder="Write a comment" class="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"></textarea>
            <button @click="submitComment" class="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 ease-in-out">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </main>
  </template>
  


