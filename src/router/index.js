import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListarUsuario from "../components/ListarUsuario.vue"
import CrearUsuario from "../components/CrearUsuario.vue"
import EditarUsuario from "../components/EditarUsuario.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/listar',
      name: 'listar',
      component: ListarUsuario
    },
    {
        path: '/crear',
        name: 'crear',
        component: CrearUsuario
    },
    {
      path: '/editar/:pkUsuario',
      name: 'editar',
      component: EditarUsuario
  }
  ]
})

export default router
