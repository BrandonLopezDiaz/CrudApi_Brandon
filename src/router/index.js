import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListarUsuario from "../components/Listar/ListarUsuario.vue"
import ListarEmpleados from "../components/Listar/ListarEmpleado.vue"
import ListarClientes from "../components/Listar/ListarCliente.vue"
import ListarDepartamento from "../components/Listar/ListarDepartamento.vue"
import ListarFactura from "../components/Listar/ListarFactura.vue"
import ListarPuesto from "../components/Listar/ListarPuesto.vue"
import ListarRol from "../components/Listar/ListarRol.vue"
import CrearUsuario from "../components/Crear/CrearUsuario.vue"
import CrearEmpleado from "../components/Crear/CrearEmpleado.vue"
import CrearCliente from "../components/Crear/CrearCliente.vue"
import CrearDepartamento from "../components/Crear/CrearDepartamento.vue"
import CrearFactura from "../components/Crear/CrearFactura.vue"
import CrearPuesto from "../components/Crear/CrearPuesto.vue"
import CrearRol from "../components/Crear/CrearRol.vue"

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
      path: '/listarEmpleados',
      name: 'listarEmpleados',
      component: ListarEmpleados
    },
    {
      path: '/listarClientes',
      name: 'listarClientes',
      component: ListarClientes
    },
    {
      path: '/listarDepartamentos',
      name: 'listarDepartamentos',
      component: ListarDepartamento
    },
    {
      path: '/listarFacturas',
      name: 'listarFacturas',
      component: ListarFactura
    },
    {
      path: '/listarPuestos',
      name: 'listarPuestos',
      component: ListarPuesto
    },
    {
      path: '/listarRols',
      name: 'listarRols',
      component: ListarRol
    },
    {
      path: '/crear',
      name: 'crear',
      component: CrearUsuario
    },
    {
      path: '/crearEmpleados',
      name: 'crearEmpleados',
      component: CrearEmpleado
    },
    {
      path: '/crearClientes',
      name: 'crearClientes',
      component: CrearCliente
    },
    {
      path: '/crearDepartamento',
      name: 'crearDepartamento',
      component: CrearDepartamento
    },
    {
      path: '/crearFactura',
      name: 'crearFactura',
      component: CrearFactura
    },
    {
      path: '/crearPuesto',
      name: 'crearPuesto',
      component: CrearPuesto
    },
    {
      path: '/crearRol',
      name: 'crearRol',
      component: CrearRol
    },
    {
      path: '/editar/:pkUsuario',
      name: 'editar',
      component: EditarUsuario
    }
  ]
})

export default router
