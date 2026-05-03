<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <nav class="navbar">
    <div class="nav-links">
      <RouterLink to="/" :class="{ active: route.path === '/' }"> Dashboard </RouterLink>
      <RouterLink to="/projects" :class="{ active: route.path.startsWith('/projects') }">
        Projects
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background: var(--surface);
  box-shadow: var(--shadow);
  z-index: 100;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-links a {
  font-size: 1rem;
  color: var(--text-muted);
  padding: 6px 0;
  border-bottom: 2px solid transparent;
  transition: var(--transition);
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--primary);
  border-bottom-color: var(--primary);
}
</style>
