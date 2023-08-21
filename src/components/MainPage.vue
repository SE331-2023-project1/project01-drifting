<template>
    <div class="main-page">
      <h1>Welcome to Our Website</h1>
      <button @click="goTo('students')">Go to Students</button>
      <button @click="goTo('teachers')">Go to Teachers</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  const goTo = (path: string) => {
    router.push({ name: path });
  };
  </script>
  
  <style scoped>
  /* Add any desired styling here */
  </style>
  
  
  
  
  
  