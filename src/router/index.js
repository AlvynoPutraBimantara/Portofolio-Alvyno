import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/DashboardView.vue'
import Projects from '../views/ProjectsView.vue'
import ProjectDetail from '../views/ProjectDetailView.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/projects', component: Projects },
  { path: '/projects/:id', component: ProjectDetail, props: true },
]

export default createRouter({
  history: createWebHistory('/Portofolio-Alvyno/'),
  routes,
})
