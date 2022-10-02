import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Now from '../views/Now.vue'
import Portfolio from '../views/Portfolio.vue'
import Resume from '../views/Resume.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      breadcrumb: [
        {
          text: 'Aymeric Le Feyer',
          icon: 'o'
        }
      ]
    }
  },
  {
    path: '/now',
    name: 'Now',
    component: Now,
    meta: {
      breadcrumb: [
        {
          text: 'Aymeric Le Feyer',
          icon: 'o',
          to: "/"
        },
        {
          text: 'Now',
          icon: 'n'
        },
        {
          text: 'D',
          icon: 'n'
        }
      ]
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
