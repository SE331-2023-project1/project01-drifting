<!-- HomeView.vue -->
<template>
  <main>
    <StudentCard :perPage="3"/>
  </main>
</template>

<script setup lang="ts">
import StudentCard from "@/components/StudentCard.vue";
</script>
