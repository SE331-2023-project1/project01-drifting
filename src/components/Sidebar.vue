<template>
  
   
    <div class="wrapper">
      <h1 class="text-6xl text-[rgb(29,161,242)]">Welcome to &nbsp</h1>
      <h1 class="text-4xl">Student Information Management System</h1>

      <nav class="flex justify-center text-lg space-x-8">
       
  <RouterLink :to="{name:'students'}" custom v-slot="{ navigate, isActive }">
    <a @click="navigate" :class="isActive ? 'border-b-4 border-[rgb(29,161,242)] pb-3 cursor-pointer' : 'hover:border-b-4 hover:border-[rgb(29,161,242)] pb-1 cursor-pointer'">Student</a>
  </RouterLink>
<h1>|</h1>
  <RouterLink :to="{name:'teachers'}" custom v-slot="{ navigate, isActive }">
    <a @click="navigate" :class="isActive ? 'border-b-4 border-[rgb(29,161,242)] pb-3 cursor-pointer' : 'hover:border-b-4 hover:border-[rgb(29,161,242)] pb-1 cursor-pointer'">Teacher</a>
  </RouterLink>
  
</nav>
    
    </div>
  

  
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>






