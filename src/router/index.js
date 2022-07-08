import { createRouter, createWebHashHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import GalerieView from '../views/GalerieView.vue'
import FormView from '../views/FormView.vue'

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: AccueilView
  },
  {
    path: '/galerie',
    name: 'galerie',
    component: GalerieView
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
