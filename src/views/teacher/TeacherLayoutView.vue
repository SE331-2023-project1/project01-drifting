<script setup lang="ts">
import { ref } from "vue";
import { Teacher } from "@/type";
import TeacherService from "@/services/TeacherService";

const props = defineProps({
  teacherId: String,
});

const teacher = ref<Teacher | null>(null);

TeacherService.getTeacherById(String(props.teacherId))
  .then((teacherResponse) => {
    teacher.value = teacherResponse.data[0];
    console.log(teacher.value);
  })
  .catch((error) => {
    console.log(error);
  });
</script>

<template>
  <main class="container">
    <div v-if="teacher">
      <div class="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div class="flex items-center space-x-8">
          <img
            class="w-24 h-24 object-cover rounded-full shadow-lg"
            :src="teacher.profileImage"
          />
          <div>
            <div
              class="grid grid-cols-1 gap-1 pt-5 pb-1.5 sm:grid-cols-3 sm:gap-4"
            >
              <dt class="text-xl font-semibold">Name</dt>
              <h1 class="text-lg">{{ teacher.name }} {{ teacher.surname }}</h1>
            </div>

            <div class="grid grid-cols-1 gap-1 py-1.5 sm:grid-cols-3 sm:gap-4">
              <dt class="text-xl font-semibold">ID</dt>
              <h1 class="text-lg">{{ teacher.teacherId }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
