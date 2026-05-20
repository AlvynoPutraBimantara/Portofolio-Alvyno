<script setup>
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects, bio, cvSections } from '../data/projectdb.js'

// Projects carousel
const carouselRef = ref(null)
function scrollLeft() {
  carouselRef.value.scrollBy({ left: -320, behavior: 'smooth' })
}
function scrollRight() {
  carouselRef.value.scrollBy({ left: 320, behavior: 'smooth' })
}

// Contact modal
const showContact = ref(false)
const copyFeedback = ref('')
function copyText(text) {
  navigator.clipboard.writeText(text)
  copyFeedback.value = text
  setTimeout(() => {
    copyFeedback.value = ''
  }, 2000)
}

// ── IMAGE MODAL (with carousel + zoom) ───────────
const showImageModal = ref(false)
const modalImages = ref([]) // array of { src, caption } for the current subsection
const modalIndex = ref(0)

function openImageModal(images, startIndex) {
  modalImages.value = images.map((img) => ({
    ...img,
    // normalize: if caption is a plain string or missing, convert to object
    caption:
      img.caption && typeof img.caption === 'object'
        ? img.caption
        : { intro: img.caption || img.alt || '', points: [] },
  }))
  modalIndex.value = startIndex
  resetZoom()
  showImageModal.value = true
}
function closeImageModal() {
  showImageModal.value = false
  resetZoom()
}
function modalPrev() {
  modalIndex.value = (modalIndex.value - 1 + modalImages.value.length) % modalImages.value.length
  resetZoom()
}
function modalNext() {
  modalIndex.value = (modalIndex.value + 1) % modalImages.value.length
  resetZoom()
}

// ── ZOOM ─────────────────────────────────────────
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
  e.deltaY < 0 ? zoomIn() : zoomOut()
}
function onDblClick() {
  zoom.value > 1 ? resetZoom() : zoomIn()
}

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

// Keyboard support
function onKeydown(e) {
  if (!showImageModal.value) return
  if (e.key === 'ArrowLeft') modalPrev()
  if (e.key === 'ArrowRight') modalNext()
  if (e.key === 'Escape') closeImageModal()
  if (e.key === '+') zoomIn()
  if (e.key === '-') zoomOut()
  if (e.key === '0') resetZoom()
}

import { onMounted, onUnmounted } from 'vue'
onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))

// Section shortcut
const activeSection = ref('')
function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeSection.value = id
  }
}
</script>

<template>
  <div class="dashboard">
    <!-- BIO -->
    <section class="bio-card" id="top">
      <div class="bio-left">
        <img :src="bio.profilepict" :alt="bio.name" class="profilepict" />
        <div class="bio-name-block">
          <h1>{{ bio.name }}</h1>
          <p class="role">{{ bio.role }}</p>
          <p class="location">
            <font-awesome-icon icon="fa-solid fa-location-dot" /> {{ bio.location }}
          </p>
        </div>
      </div>
      <div class="bio-links">
        <a :href="bio.github" target="_blank" class="link-pill">
          <font-awesome-icon icon="fa-brands fa-github" /> GitHub
        </a>
        <a :href="bio.linkedin" target="_blank" class="link-pill">
          <font-awesome-icon icon="fa-brands fa-linkedin" /> LinkedIn
        </a>
        <button class="link-pill contact-btn" @click="showContact = true">
          <font-awesome-icon icon="fa-solid fa-address-card" /> Contact Info
        </button>
      </div>
    </section>

    <!-- CONTACT MODAL -->
    <Teleport to="body">
      <div v-if="showContact" class="modal-overlay" @click.self="showContact = false">
        <div class="contact-modal">
          <button class="modal-close" @click="showContact = false">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </button>
          <h3>Contact Info</h3>

          <!-- WhatsApp -->
          <div class="contact-row">
            <font-awesome-icon icon="fa-brands fa-whatsapp" class="contact-icon wa-icon" />
            <a href="https://wa.me/6287857909820" target="_blank" class="contact-value wa-link">
              +62 878-5790-9820
            </a>
            <button class="copy-btn" @click="copyText('+6287857909820')" title="Copy number">
              <font-awesome-icon
                :icon="copyFeedback === '+6287857909820' ? 'fa-solid fa-check' : 'fa-solid fa-copy'"
              />
              {{ copyFeedback === '+6287857909820' ? 'Copied' : 'Copy' }}
            </button>
          </div>

          <!-- Email -->
          <div class="contact-row">
            <font-awesome-icon icon="fa-solid fa-envelope" class="contact-icon" />
            <span
              class="contact-value email-copy"
              @click="copyText('alvyno.putra.b@gmail.com')"
              title="Click to copy"
            >
              alvyno.putra.b@gmail.com
            </span>
            <button
              class="copy-btn"
              @click="copyText('alvyno.putra.b@gmail.com')"
              title="Copy email"
            >
              <font-awesome-icon
                :icon="
                  copyFeedback === 'alvyno.putra.b@gmail.com'
                    ? 'fa-solid fa-check'
                    : 'fa-solid fa-copy'
                "
              />
              {{ copyFeedback === 'alvyno.putra.b@gmail.com' ? 'Copied' : 'Copy' }}
            </button>
          </div>

          <p v-if="copyFeedback" class="copy-toast">Copied to clipboard!</p>
        </div>
      </div>
    </Teleport>

    <!-- CV SECTIONS -->
    <section v-for="sec in cvSections" :key="sec.id" :id="sec.id" class="cv-section">
      <div class="section-header">
        <font-awesome-icon :icon="sec.faIcon" class="section-icon" />
        <h2>{{ sec.label }}</h2>
      </div>

      <!-- Text-only intro paragraph if present -->
      <p v-if="sec.intro" class="section-intro">{{ sec.intro }}</p>

      <!-- Subsections -->
      <div class="subsections">
        <div v-for="(sub, si) in sec.items" :key="si" class="subsection-card">
          <!-- Subsection header -->
          <div class="sub-header">
            <div class="sub-title-block">
              <h3>{{ sub.title }}</h3>
              <span v-if="sub.subtitle" class="sub-subtitle">{{ sub.subtitle }}</span>
              <span v-if="sub.period" class="sub-period">
                <font-awesome-icon icon="fa-regular fa-calendar" /> {{ sub.period }}
              </span>
            </div>
            <span v-if="sub.badge" class="sub-badge">{{ sub.badge }}</span>
          </div>

          <!-- Bullet points -->
          <ul v-if="sub.points && sub.points.length" class="sub-points">
            <li v-for="(pt, pi) in sub.points" :key="pi">{{ pt }}</li>
          </ul>

          <!-- Tags / tech stack -->
          <div v-if="sub.tags && sub.tags.length" class="sub-tags">
            <span v-for="tag in sub.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>

          <!-- Image attachments -->
          <div v-if="sub.images && sub.images.length" class="sub-images">
            <img
              v-for="(img, ii) in sub.images"
              :key="ii"
              :src="img.src"
              :alt="img.alt || sub.title"
              class="sub-img"
              @click="openImageModal(sub.images, ii)"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS SECTION -->
    <section class="cv-section" id="projects">
      <div class="section-header">
        <font-awesome-icon icon="fa-solid fa-pen-ruler" class="section-icon" />
        <h2>My Projects</h2>
      </div>
      <div class="carousel-wrapper">
        <button class="scroll-btn" @click="scrollLeft">
          <font-awesome-icon icon="fa-solid fa-chevron-left" />
        </button>
        <div class="carousel" ref="carouselRef">
          <div class="carousel-item" v-for="project in projects" :key="project.id">
            <ProjectCard :project="project" />
          </div>
        </div>
        <button class="scroll-btn" @click="scrollRight">
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </button>
      </div>
    </section>
  </div>

  <!-- SIDE NAVIGATION -->
  <nav class="side-nav">
    <button
      v-for="sec in cvSections"
      :key="sec.id"
      class="side-nav-btn"
      :class="{ active: activeSection === sec.id }"
      @click="scrollToSection(sec.id)"
      :title="sec.label"
    >
      <font-awesome-icon :icon="sec.faIcon" class="side-nav-icon" />
      <span class="side-nav-label">{{ sec.label }}</span>
    </button>
    <button class="side-nav-btn" @click="scrollToSection('projects')" title="Projects">
      <font-awesome-icon icon="fa-solid fa-pen-ruler" class="side-nav-icon" />
      <span class="side-nav-label">Projects</span>
    </button>
  </nav>

  <!-- IMAGE MODAL -->
  <Teleport to="body">
    <div v-if="showImageModal" class="modal-overlay" @click.self="closeImageModal">
      <div class="modal-box">
        <button class="modal-close" @click="closeImageModal">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>

        <button v-if="modalImages.length > 1" class="modal-nav" @click="modalPrev">‹</button>

        <div class="modal-content">
          <!-- Zoom bar -->
          <div class="zoom-bar">
            <button class="zoom-btn" @click="zoomOut" :disabled="zoom <= 1">−</button>
            <span class="zoom-label">{{ Math.round(zoom * 100) }}%</span>
            <button class="zoom-btn" @click="zoomIn" :disabled="zoom >= 5">+</button>
            <button class="zoom-btn reset" @click="resetZoom">⊙</button>
          </div>

          <!-- Viewport -->
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
              :src="modalImages[modalIndex].src"
              :alt="modalImages[modalIndex].alt"
              class="modal-img"
              :style="{
                transform: `scale(${zoom}) translate(${translate.x / zoom}px, ${translate.y / zoom}px)`,
                transition: isDragging ? 'none' : 'transform 0.2s ease',
              }"
              draggable="false"
            />
          </div>

          <!-- Caption -->
          <div class="modal-caption">
            <p v-if="modalImages[modalIndex].caption?.intro" class="caption-intro">
              {{ modalImages[modalIndex].caption.intro }}
            </p>
            <ul v-if="modalImages[modalIndex].caption?.points?.length" class="caption-points">
              <li v-for="(pt, pi) in modalImages[modalIndex].caption.points" :key="pi">{{ pt }}</li>
            </ul>
          </div>
        </div>

        <button v-if="modalImages.length > 1" class="modal-nav" @click="modalNext">›</button>

        <div v-if="modalImages.length > 1" class="modal-counter">
          {{ modalIndex + 1 }} / {{ modalImages.length }}
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
/* LAYOUT*/
.dashboard {
  position: relative;
  padding-right: 60px;
}

/* ════════════════════════════════════════
   SIDE NAV
════════════════════════════════════════ */
.side-nav {
  position: fixed;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 90;
}

.side-nav-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(8px);
  border: 1.5px solid rgba(106, 90, 205, 0.2);
  border-radius: 99px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 0.75rem;
  color: var(--text-muted);
  transition: var(--transition);
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  max-width: 36px;
  overflow: hidden;
}

.side-nav-btn:hover,
.side-nav-btn.active {
  max-width: 160px;
  background: var(--primary);
  color: white;
  border-color: var(--primary);
}

.side-nav-label {
  opacity: 0;
  max-width: 0;
  overflow: hidden;
  transition:
    opacity 0.2s ease,
    max-width 0.3s ease;
}

.side-nav-btn:hover .side-nav-label,
.side-nav-btn.active .side-nav-label {
  opacity: 1;
  max-width: 120px;
}

.side-nav-icon {
  font-size: 1rem;
  flex-shrink: 0;
}

/* ════════════════════════════════════════
   BIO CARD
════════════════════════════════════════ */
.bio-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  background: var(--surface);
  border-radius: var(--radius);
  padding: 28px 32px;
  margin-bottom: 32px;
  box-shadow: 10px 10px 10px rgba(106, 90, 205, 0.35);
}

.bio-left {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.profilepict {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: var(--shadow);
  border: 3px solid var(--primary);
  flex-shrink: 0;
}

.bio-name-block h1 {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-bottom: 2px;
}

.role {
  color: var(--primary);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 2px;
}

.location {
  color: var(--text-muted);
  font-size: 0.88rem;
}

.bio-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.link-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border: 2px solid var(--primary);
  border-radius: 99px;
  font-size: 0.85rem;
  color: var(--primary);
  background: transparent;
  cursor: pointer;
  transition: var(--transition);
  font-family: inherit;
  text-decoration: none;
}

.link-pill:hover {
  background: var(--primary);
  color: white;
}

.contact-btn {
  background: var(--primary);
  color: white;
}
.contact-btn:hover {
  background: var(--primary-dark);
}

/* ════════════════════════════════════════
   CV SECTIONS
════════════════════════════════════════ */
.cv-section {
  background: var(--surface);
  border-radius: var(--radius);
  padding: 28px 32px;
  margin-bottom: 28px;
  scroll-margin-top: 90px;
  box-shadow: 5px 5px 5px rgba(106, 90, 205, 0.35);
}

.section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(106, 90, 205, 0.15);
}

.section-icon {
  font-size: 1.2rem;
  color: var(--primary);
}

.section-header h2 {
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--primary);
}

.section-intro {
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 20px;
  font-size: 0.95rem;
}

/* ════════════════════════════════════════
   SUBSECTION CARDS
════════════════════════════════════════ */
.subsections {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.subsection-card {
  border: 1px solid rgba(106, 90, 205, 0.12);
  border-radius: 10px;
  padding: 18px 20px;
  transition:
    box-shadow var(--transition),
    transform var(--transition);
}

.subsection-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-2px);
}

.sub-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.sub-title-block h3 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 2px;
}

.sub-subtitle {
  display: block;
  color: var(--primary);
  font-size: 0.88rem;
  font-weight: 600;
  margin-bottom: 2px;
}

.sub-period {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.sub-badge {
  background: rgba(106, 90, 205, 0.1);
  color: var(--primary);
  padding: 4px 12px;
  border-radius: 99px;
  font-size: 0.78rem;
  font-weight: 600;
  white-space: nowrap;
  flex-shrink: 0;
}

.sub-points {
  list-style: none;
  padding: 0;
  margin-bottom: 10px;
}

.sub-points li {
  padding: 3px 0 3px 16px;
  position: relative;
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.sub-points li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--primary);
  font-size: 0.75rem;
  top: 5px;
}

.sub-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}

.tag {
  background: rgba(106, 90, 205, 0.08);
  color: var(--primary);
  padding: 2px 10px;
  border-radius: 99px;
  font-size: 0.78rem;
  font-weight: 500;
}

/* ════════════════════════════════════════
   IMAGE ATTACHMENTS
════════════════════════════════════════ */
.sub-images {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}

.sub-img {
  width: 100px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
  cursor: zoom-in;
  box-shadow: var(--shadow);
  transition:
    transform var(--transition),
    box-shadow var(--transition);
  border: 2px solid transparent;
}

.sub-img:hover {
  transform: scale(1.06);
  box-shadow: var(--shadow-hover);
  border-color: var(--primary);
}

/* ════════════════════════════════════════
   PROJECTS CAROUSEL
════════════════════════════════════════ */
.carousel-wrapper {
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

/* ════════════════════════════════════════
   CONTACT MODAL
════════════════════════════════════════ */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.contact-modal {
  background: var(--surface);
  border-radius: var(--radius);
  padding: 32px;
  min-width: 340px;
  max-width: 90vw;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.contact-modal h3 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 24px;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(106, 90, 205, 0.1);
}

.contact-row:last-of-type {
  border-bottom: none;
}

.contact-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
}

.contact-value {
  flex: 1;
  font-size: 0.95rem;
  font-weight: 500;
}

.wa-link {
  color: #25d366;
  text-decoration: none;
  font-weight: 600;
}

.wa-link:hover {
  text-decoration: underline;
}

.email-copy {
  cursor: pointer;
  color: var(--text);
}

.email-copy:hover {
  color: var(--primary);
  text-decoration: underline;
}

.copy-btn {
  padding: 5px 12px;
  font-size: 0.78rem;
  background: rgba(106, 90, 205, 0.1);
  color: var(--primary);
  border: 1px solid rgba(106, 90, 205, 0.3);
  border-radius: 99px;
  cursor: pointer;
  transition: var(--transition);
  white-space: nowrap;
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.copy-btn:hover {
  background: var(--primary);
  color: white;
}

.copy-toast {
  text-align: center;
  margin-top: 14px;
  color: #22c55e;
  font-size: 0.85rem;
  font-weight: 600;
}

/* ════════════════════════════════════════
   MODAL CLOSE BUTTON (UPDATED)
════════════════════════════════════════ */
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  z-index: 10;
  transition: var(--transition);
}

.modal-close:hover {
  background: var(--primary);
  color: white;
}

/* ════════════════════════════════════════
   IMAGE MODAL (carousel + zoom)
════════════════════════════════════════ */
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

.zoom-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: rgba(0, 0, 0, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
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
}
.zoom-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.25);
}
.zoom-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.zoom-btn.reset {
  width: auto;
  padding: 0 10px;
  font-size: 0.9rem;
}

.zoom-label {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.82rem;
  min-width: 44px;
  text-align: center;
}

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

/* ════════════════════════════════════════
   MODAL CAPTION (UPDATED)
════════════════════════════════════════ */
.modal-caption {
  flex-shrink: 0;
  min-height: 48px;
  max-height: 160px;
  overflow-y: auto;
  padding: 12px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.caption-intro {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0 0 6px 0;
  font-weight: 500;
}

.caption-points {
  list-style: none;
  padding: 0;
  margin: 0;
}

.caption-points li {
  position: relative;
  padding: 2px 0 2px 16px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.5;
}

.caption-points li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: rgba(106, 90, 205, 0.9);
  font-size: 0.72rem;
  top: 4px;
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
  flex-shrink: 0;
  z-index: 10;
}
.modal-nav:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.6);
}

.modal-counter {
  position: absolute;
  bottom: -28px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.85rem;
  white-space: nowrap;
}

/* ════════════════════════════════════════
   WHATSAPP ICON COLOR
════════════════════════════════════════ */
.wa-icon {
  color: #25d366;
  font-size: 1.3rem;
}

/* ════════════════════════════════════════
   RESPONSIVE
════════════════════════════════════════ */
@media (max-width: 768px) {
  .dashboard {
    padding-right: 0;
  }
  .side-nav {
    display: none;
  }
  .bio-card {
    flex-direction: column;
  }
  .bio-left {
    flex-direction: column;
    text-align: center;
  }
  .bio-links {
    justify-content: center;
  }
}
</style>
