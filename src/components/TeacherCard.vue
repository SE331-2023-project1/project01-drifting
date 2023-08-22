<script setup lang="ts">
import { type Teacher } from "@/type";
import type { PropType } from "vue";

const props = defineProps({
  teacher: {
    type: Object as PropType<Teacher>,
    require: true,
  },
});
</script>

<template>
  <article>
    <RouterLink
      :to="{
        name: 'teacher-detail',
        params: { teacherId: teacher?.teacherId },
      }"
    >
    <div class="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl w-80 hover:bg-gray-200">
      <img class="w-full h-56 object-cover" :src="teacher?.profileImage" />
      <div class="px-6 py-4">
        <div class="mb-2">
          <h2 class="text-xl font-bold text-gray-900">{{ teacher?.name }} {{ teacher?.surname }}</h2>
          <div class="rounded-lg italic font-bold bg-[rgb(158,118,180)] py-1 px-2 text-xl text-white">{{ teacher?.teacherId }}</div>
        </div>
      </div>
      </div>
    </RouterLink>
  </article>
</template>

