<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '../data/projectdb.js'

const route = useRoute()
const router = useRouter()

const project = computed(() => projects.find((p) => p.id === Number(route.params.id)))

// MODAL
const modalImage = ref(null)
const showModal = ref(false)

function openModal(img) {
  modalImage.value = img
  showModal.value = true
}
function closeModal() {
  showModal.value = false
  modalImage.value = null
}

// GALLERY
const galleryRef = ref(null)
function scrollLeft() {
  galleryRef.value.scrollBy({ left: -300, behavior: 'smooth' })
}
function scrollRight() {
  galleryRef.value.scrollBy({ left: 300, behavior: 'smooth' })
}
</script>

<template>
  <div v-if="project">
    <button class="back-btn" @click="router.back()">← Back</button>
    <!-- MAIN IMAGE -->
    <div class="main-image-wrap">
      <img
        :src="project.mainImage"
        :alt="project.title"
        class="main-image"
        @click="openModal(project.mainImage)"
      />
    </div>
    <!-- INFO -->
    <section class="info">
      <h1>{{ project.title }}</h1>
      <div class="tags">
        <span v-for="tech in project.tech" :key="tech" class="tag">{{ tech }}</span>
      </div>
      <p class="description">{{ project.description }}</p>
      <div class="detail-links">
        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="btn">Live Demo</a>
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="btn outline"
          >GitHub</a
        >
      </div>
    </section>

    <!-- GALLERY CAROUSEL -->
    <section class="gallery-section" v-if="project.gallery.length">
      <h2>Gallery</h2>
      <div class="carousel-wrapper">
        <button class="scroll-btn" @click="scrollLeft">‹</button>
        <div class="gallery-carousel" ref="galleryRef">
          <img
            v-for="(img, i) in project.gallery"
            :key="i"
            :src="img"
            :alt="`${project.title} screenshot ${i + 1}`"
            class="gallery-img"
            @click="openModal(img)"
          />
        </div>
        <button class="scroll-btn" @click="scrollRight">›</button>
      </div>
    </section>
  </div>

  <!-- 404 fallback -->
  <div v-else class="not-found">
    <p>Project not found.</p>
    <RouterLink to="/projects">← Back to Projects</RouterLink>
  </div>

  <!-- MODAL -->
  <Teleport to="body">
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-box">
        <button class="modal-close" @click="closeModal">✕</button>
        <img :src="modalImage" alt="Full size" class="modal-img" />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.back-btn {
  background: none;
  border: none;
  color: var(--primary);
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 24px;
  padding: 0;
}
.back-btn:hover {
  text-decoration: underline;
}

/* MAIN IMAGE */
.main-image-wrap {
  text-align: center;
  margin-bottom: 32px;
}
.main-image {
  max-height: 420px;
  width: 100%;
  object-fit: cover;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  cursor: zoom-in;
}

/* INFO */
.info {
  max-width: 760px;
  margin: 0 auto 40px;
}
.info h1 {
  font-size: 2rem;
  margin-bottom: 12px;
}
.description {
  line-height: 1.7;
  color: var(--text-muted);
  margin: 16px 0 20px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}
.tag {
  background: rgba(106, 90, 205, 0.1);
  color: var(--primary);
  padding: 3px 12px;
  border-radius: 99px;
  font-size: 0.82rem;
}

.detail-links {
  display: flex;
  gap: 12px;
}
.btn {
  padding: 10px 22px;
  background: var(--primary);
  color: white;
  border-radius: 99px;
  font-size: 0.9rem;
  transition: var(--transition);
}
.btn:hover {
  background: var(--primary-dark);
}
.btn.outline {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
}
.btn.outline:hover {
  background: var(--primary);
  color: white;
}

/* GALLERY */
.gallery-section h2 {
  font-size: 1.4rem;
  margin-bottom: 16px;
}
.carousel-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}
.gallery-carousel {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 8px 4px;
  scrollbar-width: none;
}
.gallery-carousel::-webkit-scrollbar {
  display: none;
}
.gallery-img {
  min-width: 260px;
  height: 180px;
  object-fit: cover;
  border-radius: var(--radius);
  scroll-snap-align: start;
  cursor: zoom-in;
  box-shadow: var(--shadow);
  transition: transform var(--transition);
}
.gallery-img:hover {
  transform: scale(1.03);
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

/* MODAL */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.modal-box {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}
.modal-img {
  max-width: 90vw;
  max-height: 85vh;
  border-radius: var(--radius);
  object-fit: contain;
}
.modal-close {
  position: absolute;
  top: -14px;
  right: -14px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  justify-content: center;
}

.not-found {
  text-align: center;
  padding: 60px 0;
  color: var(--text-muted);
}
</style>
