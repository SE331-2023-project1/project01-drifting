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
    <div class="p-5 w-80 cursor-pointer  rounded-lg bg-gradient-to-b bg-[rgb(242,243,244)] m-4 shadow-xl ring-1 ring-gray-900/5 hover:bg-[rgb(202,202,202)] hover:ring-[rgb(212,212,212)] " >
        <div class="card-body">
          <img
            class="w-24 h-24 object-cover mb-4 rounded-md shadow-lg"
            :src="teacher?.profileImage"
          />
          <h2 class="mb-3 text-xl font-bold text-gray-600">
            {{ teacher?.name }} {{ teacher?.surname }}
            <span>({{ teacher?.teacherId }})</span>
          </h2 >
          <p class="text-lg  text-gray-600">{{ teacher?.teacherId }}</p>
        </div>
      </div>
    </RouterLink>
  </article>
</template>

