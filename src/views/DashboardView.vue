<script setup>
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects, bio, cvSections } from '../data/projectdb.js'

// Carousel
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

// Image modal
const modalImage = ref(null)
const showImageModal = ref(false)

function openImageModal(img) {
  modalImage.value = img
  showImageModal.value = true
}
function closeImageModal() {
  showImageModal.value = false
  modalImage.value = null
}

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
          <p class="location">{{ bio.location }}</p>
        </div>
      </div>
      <div class="bio-links">
        <a :href="bio.github" target="_blank" class="link-pill"> GitHub </a>
        <a :href="bio.linkedin" target="_blank" class="link-pill"> LinkedIn </a>
        <button class="link-pill contact-btn" @click="showContact = true">Contact Info</button>
      </div>
    </section>

    <!-- CONTACT -->
    <Teleport to="body">
      <div v-if="showContact" class="modal-overlay" @click.self="showContact = false">
        <div class="contact-modal">
          <button class="modal-close" @click="showContact = false">✕</button>
          <h3>Contact Info</h3>

          <!-- WhatsApp -->
          <div class="contact-row">
            <a href="https://wa.me/6287857909820" target="_blank" class="contact-value wa-link">
              +62 878-5790-9820
            </a>
            <button class="copy-btn" @click="copyText('+6287857909820')" title="Copy number">
              {{ copyFeedback === '+6287857909820' ? '✓ Copied' : ' Copy' }}
            </button>
          </div>

          <!-- Email -->
          <div class="contact-row">
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
              {{ copyFeedback === 'alvyno.putra.b@gmail.com' ? '✓ Copied' : ' Copy' }}
            </button>
          </div>

          <p v-if="copyFeedback" class="copy-toast">Copied to clipboard!</p>
        </div>
      </div>
    </Teleport>

    <!--  CV -->
    <section v-for="sec in cvSections" :key="sec.id" :id="sec.id" class="cv-section">
      <div class="section-header">
        <span class="section-icon">{{ sec.icon }}</span>
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
              <span v-if="sub.period" class="sub-period"> {{ sub.period }}</span>
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
              @click="openImageModal(img.src)"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="cv-section" id="projects">
      <div class="section-header">
        <span class="section-icon"></span>
        <h2>My Projects</h2>
      </div>
      <div class="carousel-wrapper">
        <button class="scroll-btn" @click="scrollLeft">‹</button>
        <div class="carousel" ref="carouselRef">
          <div class="carousel-item" v-for="project in projects" :key="project.id">
            <ProjectCard :project="project" />
          </div>
        </div>
        <button class="scroll-btn" @click="scrollRight">›</button>
      </div>
    </section>
  </div>

  <!-- NAVIGATION -->
  <nav class="side-nav">
    <button
      v-for="sec in cvSections"
      :key="sec.id"
      class="side-nav-btn"
      :class="{ active: activeSection === sec.id }"
      @click="scrollToSection(sec.id)"
      :title="sec.label"
    >
      <span class="side-nav-icon">{{ sec.icon }}</span>
      <span class="side-nav-label">{{ sec.label }}</span>
    </button>
    <button class="side-nav-btn" @click="scrollToSection('projects')" title="Projects">
      <span class="side-nav-icon"></span>
      <span class="side-nav-label">Projects</span>
    </button>
  </nav>

  <!-- IMAGES -->
  <Teleport to="body">
    <div v-if="showImageModal" class="modal-overlay" @click.self="closeImageModal">
      <div class="image-modal-box">
        <button class="modal-close" @click="closeImageModal">✕</button>
        <img :src="modalImage" alt="Full size" class="modal-img" />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
/* LAYOUT*/
.dashboard {
  position: relative;
  padding-right: 60px; /* space for side nav */
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
  box-shadow: var(--shadow);
  margin-bottom: 32px;
  border-left: 5px solid var(--primary);
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
  box-shadow: var(--shadow);
  margin-bottom: 28px;
  scroll-margin-top: 90px;
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
  font-size: 1.4rem;
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
  display: inline-block;
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
  background: rgba(0, 0, 0, 0.5);
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

.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(106, 90, 205, 0.1);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: var(--transition);
}

.modal-close:hover {
  background: var(--primary);
  color: white;
}

/* ════════════════════════════════════════
   IMAGE MODAL
════════════════════════════════════════ */
.image-modal-box {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.modal-img {
  max-width: 90vw;
  max-height: 85vh;
  border-radius: var(--radius);
  object-fit: contain;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
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
