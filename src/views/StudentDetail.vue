
  <script setup lang="ts">
  import { ref, type PropType } from 'vue';
  import { useRoute } from 'vue-router';
  import StudentService from '@/services/StudentService';
  import  {type StudentItem } from '@/type'; // Import StudentItem type if it defines the student structure
  
  const route = useRoute();
  const studentId = parseInt(route.params.id as string);
    const student = ref<StudentItem | null>(null);
  defineProps({
    student: {
    type: Object as PropType<StudentItem>,
    required: true
  }
})
  
  const getStudentDetail = async () => {
    const { data } = await StudentService.getStudentById(studentId); // Fix method name
    student.value = data;
  };
  
  getStudentDetail();
  </script>

<template>
    <div v-if="student">
      <img :src="student.profileImage" alt="Profile Image" />
      <h1>{{ student.name }} {{ student.surname }}</h1>
      <!-- Add more student details here -->
    </div>
  </template>
  
  
  