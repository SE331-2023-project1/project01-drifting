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
    <div class="p-5 w-80 cursor-pointer  rounded-lg bg-gradient-to-b bg-[rgb(247,72,67)] m-4 shadow-xl ring-1 ring-gray-900/5">
        <div class="card-body">
          <img
            class="w-24 h-24 object-cover mb-4 rounded-md shadow-lg"
            :src="student?.profileImage"
          />
          <h2 class="mb-3 text-xl font-bold text-white">
            {{student?.name}} {{student?.surname}}
          </h2>
          <h3 class="text-lg  text-white">Student ID: {{student?.studentId}}</h3>
          <p class="mb-3  text-white">Teacher ID: {{student?.teacherId}}</p>
        </div>
      </div>
    </RouterLink>
  </article>
</template>

<style scoped>

</style>
