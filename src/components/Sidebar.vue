<template>
  
    
    <div class="pl-0">
      <h1 class="text-3xl text-purple-500">Welcome to &nbsp</h1>
      <h1 class="text-3xl">Student Information Management System</h1>

      <nav>
        <RouterLink :to="{ name: 'students' }" class="button">
        <span class="text">Student</span>
      </RouterLink>
      <RouterLink :to="{ name: 'teachers' }" class="button">
        <span class="text">Teacher</span>
      </RouterLink>
      </nav>
    </div>
  
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style >

</style>




