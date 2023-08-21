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
  <main class="container">
    <div v-if="student">
      <div style="background-color: #d3f5fd">
        <div class="p-6 rounded-lg shadow-md space-y-4">
          <div class="-my-3 divide-y divide-gray-100 text-sm m-5 mt-2">
            <img
              class="w-24 h-24 object-cover rounded-full shadow-lg"
              :src="student.profileImage"
            />
            <div>
              <div
                class="grid grid-cols-1 gap-1 pt-5 pb-1.5 sm:grid-cols-3 sm:gap-4"
              >
                <dt class="text-xl font-semibold">Name</dt>
                <h1 class="text-lg">
                  {{ student.name }} {{ student.surname }}
                </h1>
              </div>

              <div
                class="grid grid-cols-1 gap-1 py-1.5 sm:grid-cols-3 sm:gap-4"
              >
                <dt class="text-xl font-semibold">Student ID</dt>
                <h1 class="text-lg">{{ student.studentId }}</h1>
              </div>

              <div class="grid grid-cols-1 gap-1 py-1 sm:grid-cols-3 sm:gap-4">
                <dt class="text-xl font-semibold">Course</dt>
                <h1 class="text-lg">{{ student.courseList }}</h1>
              </div>

              <div
                class="grid grid-cols-1 gap-1 py-1.5 sm:grid-cols-3 sm:gap-4"
              >
                <dt class="text-xl font-semibold">Teacher</dt>
                <h1 class="text-lg">{{ student.teacherId}}</h1>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h1 class="text-xl">Teacher :</h1>
            <div class="flex items-center space-x-4">
              <img
                class="w-24 h-24 object-cover rounded-full shadow-lg"
                :src="teacher?.profileImage"
              />
              <div>
                <h1 class="text-2xl font-semibold">
                  {{ teacher?.name }} {{ teacher?.surname }}
                </h1>
                <h1 class="text-lg">{{ teacher?.teacherId }}</h1>
              </div>
            </div>
          </div>
          
          <div class="border-t border-gray-300 pt-4">
            <h2 class="text-lg font-semibold">All Comments</h2>
            <div v-for="(comment, index) in comments" :key="index">
              <p>{{ comment }}</p>
            </div>
          </div>

          <div class="border-t border-gray-300 pt-4">
            <h2 class="text-lg font-semibold">Add Comment</h2>
            <div class="comment-box mt-4">
              <textarea
                v-model="newComment"
                placeholder="Write a comment"
                class="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
              ></textarea>
              <button
                @click="submitComment"
                class="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 ease-in-out"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
