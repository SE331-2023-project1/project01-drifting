<script setup lang="ts">
import type { Teacher } from "@/type";
import type { PropType } from "vue";

defineProps({
  teacher: {
    type: Object as PropType<Teacher>,
    require: true,
  },
});
</script>
<template>
  {{ teacher }}
  <div v-if="teacher"></div>
</template>
