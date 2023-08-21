<script setup lang="ts">
import type { Student } from "@/type";
import type { PropType } from "vue";

defineProps({
  student: {
    type: Object as PropType<Student>,
    require: true,
  },
});
</script>
<template>
  {{ student }}
  <div v-if="student"></div>
</template>
