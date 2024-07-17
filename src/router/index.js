import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import Shop from '../components/Shop.vue';
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import Cart from '../components/Cart.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/shop',
      name:'shop',
      component:Shop
    },
    {
      path:'/about',
      name:'about',
      component:About
    },
    {
    path:'/contact',
    name:'contact',
    component:Contact
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    }
    
  ]
})

export default router
