<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '../data/projectdb.js'

const route = useRoute()
const router = useRouter()

const project = computed(() => projects.find((p) => p.id === Number(route.params.id)))

// Modal
const showModal = ref(false)
const modalIndex = ref(0)

const allImages = computed(() => {
  if (!project.value) return []
  return [project.value.mainImage, ...project.value.gallery]
})

function openModal(item) {
  const src = typeof item === 'string' ? item : item.src
  const idx = allImages.value.findIndex((i) => (typeof i === 'string' ? i : i.src) === src)
  modalIndex.value = idx === -1 ? 0 : idx
  resetZoom()
  showModal.value = true
}

function closeModal() {
  showModal.value = false
  resetZoom()
}

function modalPrev() {
  modalIndex.value = (modalIndex.value - 1 + allImages.value.length) % allImages.value.length
  resetZoom()
}

function modalNext() {
  modalIndex.value = (modalIndex.value + 1) % allImages.value.length
  resetZoom()
}

// ZOOM
const zoom = ref(1)
const isDragging = ref(false)
const dragStart = ref({ x: 0, y: 0 })
const translate = ref({ x: 0, y: 0 })
const lastTranslate = ref({ x: 0, y: 0 })

const ZOOM_STEP = 0.4
const ZOOM_MIN = 1
const ZOOM_MAX = 5

function resetZoom() {
  zoom.value = 1
  translate.value = { x: 0, y: 0 }
  lastTranslate.value = { x: 0, y: 0 }
  isDragging.value = false
}

function zoomIn() {
  zoom.value = Math.min(ZOOM_MAX, +(zoom.value + ZOOM_STEP).toFixed(2))
}
function zoomOut() {
  zoom.value = Math.max(ZOOM_MIN, +(zoom.value - ZOOM_STEP).toFixed(2))
  if (zoom.value === ZOOM_MIN) translate.value = { x: 0, y: 0 }
}

function onWheel(e) {
  e.preventDefault()
  if (e.deltaY < 0) zoomIn()
  else zoomOut()
}

function onDblClick() {
  if (zoom.value > 1) resetZoom()
  else zoomIn()
}

// Mouse drag
function onMouseDown(e) {
  if (zoom.value <= 1) return
  isDragging.value = true
  dragStart.value = { x: e.clientX - lastTranslate.value.x, y: e.clientY - lastTranslate.value.y }
}
function onMouseMove(e) {
  if (!isDragging.value) return
  translate.value = { x: e.clientX - dragStart.value.x, y: e.clientY - dragStart.value.y }
}
function onMouseUp() {
  isDragging.value = false
  lastTranslate.value = { ...translate.value }
}

// Touch drag
const touchStart = ref({ x: 0, y: 0 })
function onTouchStart(e) {
  if (zoom.value <= 1) return
  const t = e.touches[0]
  touchStart.value = { x: t.clientX - lastTranslate.value.x, y: t.clientY - lastTranslate.value.y }
}
function onTouchMove(e) {
  if (zoom.value <= 1) return
  e.preventDefault()
  const t = e.touches[0]
  translate.value = { x: t.clientX - touchStart.value.x, y: t.clientY - touchStart.value.y }
}
function onTouchEnd() {
  lastTranslate.value = { ...translate.value }
}

// Keyboard
function onKeydown(e) {
  if (!showModal.value) return
  if (e.key === 'ArrowLeft') modalPrev()
  if (e.key === 'ArrowRight') modalNext()
  if (e.key === 'Escape') closeModal()
  if (e.key === '+') zoomIn()
  if (e.key === '-') zoomOut()
  if (e.key === '0') resetZoom()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))

// INFINITE CAROUSEL
const carouselIndex = ref(0)
const carouselKey = ref(0)

function carouselPrev() {
  const n = project.value?.gallery.length ?? 0
  if (!n) return
  carouselIndex.value = (carouselIndex.value - 1 + n) % n
  carouselKey.value++
}

function carouselNext() {
  const n = project.value?.gallery.length ?? 0
  if (!n) return
  carouselIndex.value = (carouselIndex.value + 1) % n
  carouselKey.value++
}

const visibleGallery = computed(() => {
  if (!project.value?.gallery.length) return []
  const g = project.value.gallery
  const n = g.length
  const slots =
    n >= 5
      ? [-2, -1, 0, 1, 2]
      : n === 4
        ? [-1, 0, 1, 2]
        : n === 3
          ? [-1, 0, 1]
          : n === 2
            ? [0, 1]
            : [0]
  return slots.map((offset) => {
    const idx = (carouselIndex.value + offset + n) % n
    return { ...g[idx], offset, stableKey: `${carouselKey.value}-${offset}` }
  })
})

function shortCaption(text) {
  if (!text) return ''

  const limit = Math.max(12, Math.floor(text.length * 0.15))

  return text.length > limit ? text.slice(0, limit).trim() + '...' : text
}
</script>

<template>
  <div v-if="project">
    <!-- BACK BUTTON -->
    <button class="back-btn" @click="router.back()">← Back</button>

    <!-- MAIN IMAGE -->
    <div class="main-image-wrap">
      <img
        :src="project.mainImage.src"
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

      <div class="description">
        <p v-if="project.description.intro" class="desc-intro">
          {{ project.description.intro }}
        </p>
        <ul v-if="project.description.points?.length" class="desc-points">
          <li v-for="(pt, i) in project.description.points" :key="i">{{ pt }}</li>
        </ul>
      </div>

      <div class="detail-links">
        <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="btn">Live Demo</a>
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="btn outline"
          ><font-awesome-icon icon="fa-brands fa-github" /> GitHub</a
        >
      </div>
    </section>

    <!-- GALLERY CAROUSEL -->
    <section class="gallery-section" v-if="project.gallery.length">
      <h2>Gallery</h2>

      <div class="carousel-wrapper">
        <button class="scroll-btn" @click="carouselPrev">‹</button>

        <div class="gallery-carousel">
          <div
            v-for="item in visibleGallery"
            :key="item.stableKey"
            class="gallery-item"
            :class="{
              'is-center': item.offset === 0,
              'is-side1': Math.abs(item.offset) === 1,
              'is-side2': Math.abs(item.offset) === 2,
            }"
            @click="
              item.offset === 0
                ? openModal(item)
                : item.offset < 0
                  ? carouselPrev()
                  : carouselNext()
            "
          >
            <img :src="item.src" :alt="item.caption || 'screenshot'" class="gallery-img" />

            <p v-if="item.caption && item.offset === 0" class="gallery-thumb-caption">
              {{ shortCaption(item.caption) }}
            </p>
          </div>
        </div>

        <button class="scroll-btn" @click="carouselNext">›</button>
      </div>
    </section>
  </div>

  <!-- 404 fallback -->
  <div v-else class="not-found">
    <p>Project not found.</p>
    <RouterLink to="/projects">← Back to Projects</RouterLink>
  </div>

  <!-- MODAL with carousel -->
  <Teleport to="body">
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-box">
        <button class="modal-close" @click="closeModal">✕</button>

        <button v-if="allImages.length > 1" class="modal-nav modal-nav--prev" @click="modalPrev">
          ‹
        </button>

        <div class="modal-content">
          <!-- Zoom controls -->
          <div class="zoom-bar">
            <button class="zoom-btn" @click="zoomOut" :disabled="zoom <= 1" title="Zoom out (-)">
              −
            </button>
            <span class="zoom-label">{{ Math.round(zoom * 100) }}%</span>
            <button class="zoom-btn" @click="zoomIn" :disabled="zoom >= 5" title="Zoom in (+)">
              +
            </button>
            <button class="zoom-btn reset" @click="resetZoom" title="Reset zoom (0)">⊙</button>
          </div>

          <!-- Image viewport — clipping container -->
          <div
            class="img-viewport"
            @wheel.prevent="onWheel"
            @dblclick="onDblClick"
            @mousedown="onMouseDown"
            @mousemove="onMouseMove"
            @mouseup="onMouseUp"
            @mouseleave="onMouseUp"
            @touchstart="onTouchStart"
            @touchmove.prevent="onTouchMove"
            @touchend="onTouchEnd"
            :style="{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in' }"
          >
            <img
              :src="allImages[modalIndex].src || allImages[modalIndex]"
              :alt="`Image ${modalIndex + 1}`"
              class="modal-img"
              :style="{
                transform: `scale(${zoom}) translate(${translate.x / zoom}px, ${translate.y / zoom}px)`,
                transition: isDragging ? 'none' : 'transform 0.2s ease',
              }"
              draggable="false"
            />
          </div>

          <div class="modal-caption">
            <p v-if="allImages[modalIndex].caption">{{ allImages[modalIndex].caption }}</p>
          </div>
        </div>

        <button v-if="allImages.length > 1" class="modal-nav modal-nav--next" @click="modalNext">
          ›
        </button>

        <div v-if="allImages.length > 1" class="modal-counter">
          {{ modalIndex + 1 }} / {{ allImages.length }}
        </div>
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

.description {
  margin: 16px 0 20px;
}

.desc-intro {
  line-height: 1.7;
  color: var(--text-muted);
  margin-bottom: 10px;
}

.desc-points {
  list-style: none;
  padding: 0;
  margin: 0;
}

.desc-points li {
  position: relative;
  padding: 4px 0 4px 20px;
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.desc-points li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--primary);
  font-size: 0.8rem;
  top: 6px;
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

/* INFINITE CAROUSEL */
.gallery-section h2 {
  font-size: 1.4rem;
  margin-bottom: 16px;
}

.carousel-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.gallery-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  flex: 1;
  overflow: hidden;
  padding: 10px 0;
  min-height: 240px;
}

.gallery-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  transition:
    transform 0.35s ease,
    opacity 0.35s ease;
}

.gallery-item.is-center {
  z-index: 3;
  cursor: zoom-in;
}

.gallery-item.is-side1,
.gallery-item.is-side2 {
  cursor: pointer;
}

.gallery-item.is-side1 {
  opacity: 0.72;
}

.gallery-item.is-side2 {
  opacity: 0.4;
}

.gallery-img {
  object-fit: cover;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  display: block;
}

/* CENTER */
.gallery-item.is-center .gallery-img {
  width: 320px;
  height: 210px;
}

/* SIDE 1 */
.gallery-item.is-side1 .gallery-img {
  width: 240px;
  height: 170px;
}

/* SIDE 2 */
.gallery-item.is-side2 .gallery-img {
  width: 180px;
  height: 130px;
}

.gallery-item.is-side1:hover .gallery-img,
.gallery-item.is-side2:hover .gallery-img {
  transform: scale(1.03);
  opacity: 0.92;
}

.gallery-thumb-caption {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin: 8px 4px 0;
  line-height: 1.4;
  text-align: center;
  max-width: 320px;
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
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 98vw;
}

.modal-content {
  display: flex;
  flex-direction: column;
  width: 88vw;
  max-width: 1200px;
  height: 90vh;
  border-radius: var(--radius);
  background: rgba(20, 20, 20, 0.95);
  overflow: hidden;
}

/* ZOOM BAR */
.zoom-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: var(--radius) var(--radius) 0 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  width: 100%;
  justify-content: center;
  flex-shrink: 0;
}

.zoom-btn {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  border-radius: 6px;
  width: 30px;
  height: 30px;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  line-height: 1;
}

.zoom-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.25);
}

.zoom-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.zoom-btn.reset {
  font-size: 0.9rem;
  width: auto;
  padding: 0 10px;
}

.zoom-label {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.82rem;
  min-width: 44px;
  text-align: center;
}

/* IMAGE VIEWPORT */
.img-viewport {
  flex: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  min-height: 0;
}

.modal-img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  pointer-events: none;
}

.modal-caption {
  flex-shrink: 0;
  min-height: 52px;
  max-height: 140px;
  overflow-y: auto;
  padding: 14px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.modal-caption p {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
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
  z-index: 10;
}

.modal-nav {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(6px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  border-radius: 10px;
  width: 52px;
  height: 130px;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;
  z-index: 10;
  flex-shrink: 0;
}

.modal-nav:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.6);
}

.modal-nav--prev,
.modal-nav--next {
  position: static;
  transform: none;
}

.modal-counter {
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.85rem;
  white-space: nowrap;
}

.not-found {
  text-align: center;
  padding: 60px 0;
  color: var(--text-muted);
}
</style>
