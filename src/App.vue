<script setup lang="ts">
import { RouterView } from "vue-router";
import Sidebar from "@/components/Sidebar.vue";
</script>

<template>
  <header>
    <div class="app">
      <Sidebar />
      <router-view />
    </div>
  </header>
</template>

