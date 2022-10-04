import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Now from '../views/Now.vue'
import Portfolio from '../views/Portfolio.vue'
import Resume from '../views/Resume.vue'
import Contact from '../views/Contact.vue'
import Hobbies from '../views/Hobbies.vue'

import PersonalWebsite from '../views/portfolio/PersonalWebsite.vue'
import CarolineOptique from '../views/portfolio/CarolineOptique.vue'
import Ocee from '../views/portfolio/Ocee.vue'
import NeoApp from '../views/portfolio/NeoApp.vue'
import Baggou from '../views/portfolio/Baggou.vue'
import Habidom from '../views/portfolio/Habidom.vue'
import Bonap from '../views/portfolio/Bonap.vue'
import Smartfresh from '../views/portfolio/Smartfresh.vue'
import Dunfast from '../views/portfolio/Dunfast.vue'

const home = {
  text: 'Aymeric Le Feyer',
  icon: 'emojis/aymeric',
  to: '/'
}

const portfolio = {
  text: 'Portfolio',
  icon: 'emojis/rocket',
  to: '/portfolio',
  component: Portfolio
}

const routes = [
  {
    path: home.to,
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
  routerItem('/now', 'Now', 'hand', Now),
  routerItem('/portfolio', 'Portfolio', 'rocket', Portfolio),
  routerItem('/resume', 'Resume', 'paper', Resume),
  routerItem('/hobbies', 'Hobbies', 'dice', Hobbies),
  routerItem('/contact', 'Contact', 'call', Contact),

  portfolioProject("personal-website", "Personal Website", PersonalWebsite),
  portfolioProject("caroline-optique", "Caroline Optique", CarolineOptique),
  portfolioProject("ocee", "Ocee", Ocee),
  portfolioProject("neo", "NeoApp", NeoApp),
  portfolioProject("baggou", "Baggou", Baggou),
  portfolioProject("habidom", "Habidom", Habidom),
  portfolioProject("bonap", "Bonap", Bonap),
  portfolioProject("smartfresh", "Smartfresh", Smartfresh),
  portfolioProject("dunfast", "Dunfast", Dunfast),
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

function routerItem(path, name, icon, component) {
  return {
    path: path,
    name: name,
    component: component,
    meta: {
      breadcrumb: [
        home,
        {
          text: name,
          icon: `emojis/${icon}`
        },
      ]
    }
  };
}

function portfolioProject(project, title, component) {
  return {
    path: `${portfolio.to}/${project}`,
    name: title,
    component: component,
    meta: {
      breadcrumb: [
        home,
        portfolio,
        {
          text: title,
          icon: `projects/${project}`
        },
      ]
    }
  }
}

export default router
