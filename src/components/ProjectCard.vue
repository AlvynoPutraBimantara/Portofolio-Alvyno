<script setup>
defineProps({
  project: { type: Object, required: true },
})
</script>

<template>
  <RouterLink :to="`/projects/${project.id}`" class="card">
    <img :src="project.thumbnail" :alt="project.title" class="card-img" />
    <div class="card-body">
      <h3>{{ project.title }}</h3>
      <p>{{ project.shortDesc }}</p>
      <div class="tags">
        <span v-for="tech in project.tech" :key="tech" class="tag">
          {{ tech }}
        </span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  display: block;
  background: var(--surface);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  transition:
    transform var(--transition),
    box-shadow var(--transition);
  cursor: pointer;
  color: inherit;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-hover);
}

.card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-body {
  padding: 16px;
}

.card-body h3 {
  margin-bottom: 8px;
  font-size: 1.1rem;
}

.card-body p {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 12px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  background: rgba(106, 90, 205, 0.1);
  color: var(--primary);
  padding: 2px 10px;
  border-radius: 99px;
  font-size: 0.78rem;
}
</style>
