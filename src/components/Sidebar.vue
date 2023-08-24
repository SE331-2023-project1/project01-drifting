<template>
  
   
    <div >
      <h1 class=" flex  justify-left text-6xl text-[rgb(29,161,242)] font-bold">Welcome to &nbsp</h1>
      <h1 class=" flex justify-left text-4xl font-bold">Student Management System</h1>
      <h1>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</h1>
      <h1>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</h1>
    </div >
    <div >
      <nav class="flex  text-lg space-x-8">
  <RouterLink :to="{name:'students'}" custom v-slot="{ navigate, isActive }">
    <a @click="navigate" :class="isActive ? 'border-b-4 border-[rgb(29,161,242)]   pb-3 cursor-pointer' : 'hover:border-b-4 hover:border-[rgb(29,161,242)] pb-1 cursor-pointer'">Student</a>
  </RouterLink>
<h1 class="font-xl font-bold">|</h1>
  <RouterLink :to="{name:'teachers'}" custom v-slot="{ navigate, isActive }">
    <a @click="navigate" :class="isActive ? 'border-b-4 border-[rgb(158,118,180)] pb-3 cursor-pointer' : 'hover:border-b-4 hover:border-[rgb(158,118,180)] pb-1 cursor-pointer '">Advisor</a>
  </RouterLink>
  <h1 class="font-xl font-bold">|</h1>
  <RouterLink :to="{name:'AddStudentAdvisor'}" custom v-slot="{ navigate, isActive }">
    <a @click="navigate" :class="isActive ? 'border-b-4 border-[rgb(36,215,96)] pb-3 cursor-pointer' : 'hover:border-b-4 hover:border-[rgb(158,118,180)] pb-1 cursor-pointer '">Add Student & Advisor</a>
  </RouterLink>
</nav>
</div >
  

  
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>






