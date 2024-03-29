<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
import '../assets/global.css'

let userName = localStorage.getItem('userName')
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const logout = async () => {
  try {
    const authToken = localStorage.getItem('authToken')

    if (authToken) {
      await axios.post('http://127.0.0.1:8000/api/logout', null, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })

      localStorage.clear()

      window.location.href="/login";

    }
  } catch (error) {
    console.error('Error logging out:', error)
  }
}
</script>

<template>
  <header>
    <nav class="bg-blue-600 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <img src="../assets/logo.png" alt="logo" />
        <button @click="toggleMenu" class="lg:hidden md:hidden text-white focus:outline-none">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <div class="lg:flex space-x-4 text-white hidden md:flex">
          <div class="pages flex gap-4">
            <RouterLink to="/"> Home </RouterLink>
            <RouterLink to="/products"> Products </RouterLink>
            <RouterLink  v-if="hasToken" to="/orders"> Orders </RouterLink>
          </div>
          <div v-if="hasToken" class="profile-link">


            <div class="hover-link relative" @click="toggleMenu">
              <span class=" cursor-pointer">
                {{ userName }}
              </span>
              <div v-if="isMenuOpen" class=" bg-blue-400 rounded-b-xl rounded-l-xl absolute top-4 right-0 mt-2 z-20">
                <RouterLink to="/profile" class="block text-white py-2 px-4">
                  Profile
                </RouterLink>
                <span  @click="logout" class="block text-white py-2 px-4 cursor-pointer"> Logout </span>
              </div>
            </div>
          </div>
          <div v-else class="login-link">
            <RouterLink to="/login"> Login </RouterLink>
          </div>
        </div>
      </div>

      <div v-if="isMenuOpen" class="lg:hidden bg-blue-600">
        <div class="container mx-auto py-2">
          <RouterLink to="/" @click="toggleMenu" class="block text-white mt-2"> Home </RouterLink>
          <RouterLink to="/about" @click="toggleMenu" class="block text-white mt-2">
            About
          </RouterLink>
          <RouterLink to="/products" @click="toggleMenu" class="block text-white mt-2">
            Products
          </RouterLink>
          <div v-if="hasToken">
            <RouterLink to="/profile" @click="toggleMenu" class="flex flex-row items-center text-white mt-2"
              >{{ userName }}
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="white">
                <path d="M10.5 15l7.5 7.5 7.5-7.5z" />
                <path d="M0 0h36v36h-36z" fill="none" />
              </svg>
            </RouterLink>
            <RouterLink to="/profile" @click="toggleMenu" class="block text-white mt-2 ml-2">
              Manage Profile
            </RouterLink>
            <span @click="logout" class="block text-white mt-2 ml-2">
              Logout
            </span>
          </div>
          <div v-else>
            <RouterLink to="/login" @click="toggleMenu" class="block text-white mt-2">
              Login
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<script>
export default {
  computed: {
    hasToken() {
      return localStorage.getItem('authToken') !== null
    }
  }
}
</script>
