<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  
  <header class="animate-fade-in">
    
    <img alt="university logo" class="logo" src="/src/assets/university.png" width="170" height="150" />
    <div class="wrapper">
      <h1 class="text-4xl text-purple-500">Welcome to</h1>
<h1 class="text-3xl">Student Information Management System</h1>
      <nav>
        <RouterLink to="/" class="text-purple-500">Home</RouterLink> 
        <RouterLink to="/about" class="text-purple-500">about</RouterLink>
      </nav>
    
    </div>
    <div class="border-l h-screen border-gray-400 opacity-75"></div>
  </header>

<transition name="slide" mode="out-in" enter-active-class="animate-slide-in" leave-active-class="animate-slide-out">  
    <RouterView />
  </transition>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
