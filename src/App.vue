<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import Sidebar from "@/components/Sidebar.vue";
import { computed } from "vue";

const route = useRoute();
const showSidebar = computed(() => {
  // Add conditions based on the route names where you want to hide the sidebar
  return route.name !== 'student-detail' && route.name !== 'teacher-detail' && route.name !== '404-resource';
});

</script>

<template>
  <div class="app flex flex-col h-screen m-0 p-0">
    <div class="upper-section m-9 p-0 " v-if="showSidebar">
      <Sidebar />
    </div>
    <hr class="border-gray-400 w-200">
    <div class="lower section flex-grow m-0 p-0 h-[500px] overflow-auto">
      <transition name="slide" mode="out-in">
      <RouterView />
      </transition >
    </div>
  </div>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: all 1s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}
</style>



