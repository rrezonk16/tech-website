import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsViewVue from '@/views/ProductsView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import OneProductVue from '@/components/OneProduct.vue'
import SearchProductVue from '@/components/SearchProduct.vue'
import AdminPanel from '@/views/AdminPanel.vue'
import AddProductVue from '@/components/Admin/AddProduct.vue'
import EditProductVue from '@/components/Admin/EditProduct.vue'
import RegisterViewVue from '@/views/RegisterView.vue'
import MyOrdersViewVue from '@/views/MyOrdersView.vue'

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

      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsViewVue
    },
    {
      path: '/products/:slug', 
      name: 'product-view',
      component: OneProductVue
    },
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterViewVue
    },
    {
      path: '/search-products',
      name: 'search-products',
      component: SearchProductVue
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPanel
    },
    {
      path: '/add-product',
      name: 'add-product',
      component: AddProductVue
    },
    {
      path: '/edit-product/:slug',
      name: 'edit-product',
      component: EditProductVue
    },
    {
      path: '/orders',
      name: 'orders',
      component: MyOrdersViewVue
    },
    {
      path: '/profile',
      name: 'profile',

      component: () => import('../views/ProfileView.vue')
    },
  ]
})

export default router
