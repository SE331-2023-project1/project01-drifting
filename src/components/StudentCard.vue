<script setup lang="ts">
import { Student } from "@/type";
import type { PropType } from "vue";
import { Teacher } from "@/type";

const props = defineProps({
  student: {
    type: Object as PropType<Student>,
    require: true,
  },
  teacher: {
    type: Object as PropType<Teacher>,
    require: true,
  },
});


</script>

<template>
  <article>
    <RouterLink :to="{
      name: 'student-detail',
      params: { studentId: student?.studentId },
    }">
      <div class="max-w-sm rounded bg-[rgb(245,244,245)] overflow-hidden shadow-lg hover:shadow-xl w-80 hover:bg-[rgb(210,209,211)]">
        <img class="w-full h-56 object-cover" :src="student?.profileImage" />
        <div class="px-6 py-4">
          <div class="mb-2">
            <h2 class="text-xl font-bold text-gray-900">{{ student?.name }} {{ student?.surname }}</h2>
            <div class="rounded-lg bg-[rgb(29,161,242)] py-1 px-2 text-xl text-white italic font-bold">{{ student?.studentId }}</div>
            <h2 class="text-xl font-bold text-gray-900 ">Belong to teacherID: {{ student?.teacherId }}</h2>
          </div>
        </div>
        
      </div>
    </RouterLink>
  </article>
</template>

<style scoped></style>
