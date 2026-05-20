<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-links">
        <RouterLink to="/" :class="{ active: route.path === '/' }">
          <font-awesome-icon icon="fa-solid fa-chart-line" class="nav-icon" />
          <span>Dashboard</span>
        </RouterLink>
        <RouterLink to="/projects" :class="{ active: route.path.startsWith('/projects') }">
          <font-awesome-icon icon="fa-solid fa-rocket" class="nav-icon" />
          <span>Projects</span>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(106, 90, 205, 0.12);
  z-index: 100;
  height: 70px;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.3px;
}

.brand-icon {
  font-size: 1.4rem;
  color: var(--primary);
  background: none;
  -webkit-background-clip: unset;
  background-clip: unset;
  color: var(--primary);
}

.nav-links {
  display: flex;
  gap: 8px;
}

.nav-links a {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-muted);
  border-radius: 40px;
  transition: all var(--transition);
  position: relative;
  letter-spacing: 0.2px;
}

.nav-icon {
  font-size: 0.95rem;
  transition: transform var(--transition);
}

.nav-links a:hover {
  color: var(--primary);
  background: rgba(106, 90, 205, 0.08);
}

.nav-links a:hover .nav-icon {
  transform: translateY(-1px);
}

.nav-links a.active {
  color: white;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  box-shadow: 0 4px 12px rgba(106, 90, 205, 0.3);
}

.nav-links a.active .nav-icon {
  transform: none;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 20px;
  }

  .brand span {
    display: none;
  }

  .brand-icon {
    font-size: 1.3rem;
  }

  .nav-links a span {
    display: none;
  }

  .nav-links a {
    padding: 8px 14px;
  }

  .nav-icon {
    font-size: 1.1rem;
    margin: 0;
  }
}

/* Subtle animation for active indicator */
.nav-links a.active::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 40px;
  background: inherit;
  z-index: -1;
  animation: subtlePulse 2s ease-in-out infinite;
}

@keyframes subtlePulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.85;
  }
  100% {
    opacity: 1;
  }
}
</style>
