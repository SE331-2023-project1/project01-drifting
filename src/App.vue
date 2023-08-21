<script setup lang="ts">
import { RouterView } from "vue-router";
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <div class="app flex flex-col h-screen m-0 p-0">
    <div class="upper-section m-0 p-0">
      <Sidebar/>
    </div>
    <hr class="border-gray-400 w-full" >
    <div class="lower-section flex-grow m-0 p-0">
      <router-view/>
    </div>
  </div>
</template>



