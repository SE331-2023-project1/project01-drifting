<script setup lang="ts">
import { ref } from "vue";
import { type Teacher } from "@/type";
import TeacherService from "@/services/TeacherService";

const props = defineProps({
  teacherId: String,
});

const teacher = ref<Teacher | null>(null);

TeacherService.getTeacherById(String(props.teacherId))
  .then((teacherResponse) => {
    teacher.value = (teacherResponse.data as unknown as Teacher[])[0];
    console.log(teacher.value);
  })
  .catch((error) => {
    console.log(error);
  });
</script>

<template>
 
  <main class="container w-full relative flex min-h-screen flex-col justify-center overflow-hidden bg-white py-4 sm:py-12 ">
    
    
      <div class="  bg-gray-50 rounded-lg p-5 m-4 shadow-xl ring-1 ring-gray-900/5 ">
        <img class="w-48 h-48 rounded-full mx-auto object-cover" :src="teacher?.profileImage" alt="Profile picture">
        <h2 class="text-center text-2xl font-semibold mt-3">{{ teacher?.name }} {{ teacher?.surname }}</h2>
        <h2 class="text-center text-2xl font-semibold mt-3">{{ teacher?.teacherId }}</h2>
        <p class="text-center text-gray-600 mt-1">{{teacher?.department}} department</p>
        <div class="flex justify-center mt-5">
          <h2 class="text-center text-2xl">Teaching subjects:     {{ teacher?.Teachingsubjects}}</h2>
        </div>
        <div class="mt-5">
          <h3 class="text-xl font-semibold">Phone numeber:         {{ teacher?.phonenumber }}</h3>
          <p class="text-gray-600 mt-2">Join Date:               {{ teacher?.JoinedDate }}</p>
          <hr class="border-gray-400 w-auto">
          
          <a href="/teacher"
      class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[rgb(158,118,180)] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
      <span
        class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[rgb(158,118,180)] group-hover:h-full"></span>
      <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </span>
      <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </span>
      <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Back to TeacherPage</span>
    </a>
        </div>
      </div>
     
  </main>
 


</template>

