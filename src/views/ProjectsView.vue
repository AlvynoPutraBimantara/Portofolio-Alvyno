<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projectdb.js'
</script>

<template>
  <section>
    <h1 class="page-title">All Projects</h1>
    <div class="grid">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>

<style scoped>
.page-title {
  font-size: 1.8rem;
  margin-bottom: 28px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
</style>
