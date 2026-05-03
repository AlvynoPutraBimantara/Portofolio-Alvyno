<script setup>
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects, bio } from '../data/projectdb.js'

const carouselRef = ref(null)

function scrollLeft() {
  carouselRef.value.scrollBy({ left: -320, behavior: 'smooth' })
}
function scrollRight() {
  carouselRef.value.scrollBy({ left: 320, behavior: 'smooth' })
}
</script>

<template>
  <!-- BIO -->
  <section class="bio">
    <img :src="bio.profilepict" :alt="bio.name" class="profilepict" />
    <div class="bio-info">
      <h1>{{ bio.name }}</h1>
      <p class="role">{{ bio.role }}</p>
      <p class="location">📍 {{ bio.location }}</p>
      <p class="about">{{ bio.about }}</p>
      <div class="bio-links">
        <a :href="bio.github" target="_blank">GitHub</a>
        <a :href="bio.linkedin" target="_blank">LinkedIn</a>
        <a :href="bio.whatsapp" target="_blank">WhatsApp</a>
        <a :href="bio.email" target="_blank">Email</a>
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section class="projects-section">
    <h2>PROYEK</h2>
    <div class="carousel-wrapper">
      <button class="scroll-btn left" @click="scrollLeft">‹</button>
      <div class="carousel" ref="carouselRef">
        <div class="carousel-item" v-for="project in projects" :key="project.id">
          <ProjectCard :project="project" />
        </div>
      </div>
      <button class="scroll-btn right" @click="scrollRight">›</button>
    </div>
  </section>
</template>

<style scoped>
.bio {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.profilepict {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: var(--shadow);
  flex-shrink: 0;
}

.bio-info h1 {
  font-size: 2rem;
  margin-bottom: 4px;
}
.role {
  color: var;
  font-size: 1rem;
  margin-bottom: 4px;
}
.location {
  color: var;
  font-size: 1rem;
  margin-bottom: 12px;
}
.about {
  max-width: 560px;
  line-height: 1.6;
  margin-bottom: 16px;
}

.bio-links {
  display: flex;
  gap: 12px;
}

.bio-links a {
  padding: 8px 18px;
  border: 2px solid var(--primary);
  border-radius: 99px;
  font-size: 0.9rem;
  transition: var(--transition);
}

.bio-links a:hover {
  background: var(--primary);
  color: white;
}

.projects-section h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}

.carousel {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 12px 4px;
  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel-item {
  min-width: 280px;
  scroll-snap-align: start;
}

.scroll-btn {
  background: var(--surface);
  border: 2px solid var(--primary);
  color: var(--primary);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.4rem;
  cursor: pointer;
  flex-shrink: 0;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-btn:hover {
  background: var(--primary);
  color: white;
}
</style>
