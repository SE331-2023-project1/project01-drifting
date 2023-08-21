<script setup lang="ts">
import { Student } from "@/type";
import type { PropType } from "vue";

const props = defineProps({
  student: {
    type: Object as PropType<Student>,
    require: true,
  },
});
</script>

<template>
  <article>
    <RouterLink
      :to="{
        name: 'student-detail',
        params: { studentId: student?.studentId },
      }"
    >
 
    <div class="flex flex-wrap -m-4">
    <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 hover:bg-gray-200">
        <div class="mx-auto max-w-md">
          <img
          class="w-32 h-50 object-cover absolute top-1/2 right-10 max-w-none -translate-y-1/2"
            :src="student?.profileImage"
          />
          <div class="space-y-6 py-8 text-base leading-7 text-gray-600"></div>
          <h2>
            {{ student?.name }} {{ student?.surname }}
          </h2>
          <h3>Student ID: {{ student?.studentId }}</h3>
          <p>Teacher ID: {{ student?.teacherId }}</p>
        </div>
      </div>
   
    </div>
  
    </RouterLink>
  </article>
</template>

<style scoped>
</style>
