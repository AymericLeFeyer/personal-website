import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Now from '../views/Now.vue'
import Portfolio from '../views/Portfolio.vue'
import Resume from '../views/Resume.vue'
import Contact from '../views/Contact.vue'

const home = {
  text: 'Aymeric Le Feyer',
  icon: '🥸',
  to: '/'

}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      breadcrumb: [
        {
          text: home.text,
          icon: home.icon,
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
        home,
        {
          text: 'Now',
          icon: '👋'
        },
      ]
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      breadcrumb: [
        home,
        {
          text: 'Portfolio',
          icon: '🚀'
        },
      ]
    }
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
    meta: {
      breadcrumb: [
        home,
        {
          text: 'Resume',
          icon: '📜'
        },
      ]
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      breadcrumb: [
        home,
        {
          text: 'Contact',
          icon: '📞'
        },
      ]
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
