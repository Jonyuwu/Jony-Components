// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import CardsView from '../views/cards.vue'
import ButtonsView from '../views/buttons.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/views/cards',
    name: 'Cards',
    component: CardsView
  },
  {
    path: '/views/buttons',
    name: 'Buttons',
    component: ButtonsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
