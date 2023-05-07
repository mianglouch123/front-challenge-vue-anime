import { createRouter, createWebHistory } from 'vue-router'
import SignInView from '../views/SignInView.vue';
import HomeView from '../views/HomeView.vue'
import SignUpView from '../views/SignUpView.vue'

import CreateCategory from '../views/CreateCategory.vue'
import ActualizateCategory from '../views/ActualizateCategory.vue'
import ListCategory from '../views/ListCategory.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signIn',
      name: 'signIn',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SignInView
    },
    {
      path: '/signUp',
      name: 'signUp',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: SignUpView
    },
    {
      path:'/listCategory',
      name:'listCategory',
      component:ListCategory
    },
    {
      path:'/createCategory',
      name:'createCategory',
      component: CreateCategory
    },
    {
      path:'/actualizateCategory',
      name:'actualizateCategory',
      component: ActualizateCategory
    }
    
  ]
})

export default router
