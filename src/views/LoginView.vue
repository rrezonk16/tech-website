<template>
  <div class=" h-96 flex items-center justify-center">
    <form @submit.prevent="login" class="bg-white p-8 shadow-md rounded-md w-96">
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input type="email" id="email" v-model="email" class="w-full border border-blue-400 p-2 rounded-lg" />
      </div>

      <div class="mb-4">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
        <input type="password" id="password" v-model="password" class="w-full border border-blue-400 p-2 rounded-lg" />
      </div>

      <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
      <div class="flex flex-row justify-between mt-2">
      <p>Don't have an account?</p>
      <RouterLink class=" underline text-blue-900" to="/register"> Sign Up </RouterLink>
    </div>
    </form>
  
  </div>
</template>

  
  <script>
  import axios from 'axios';
  import { API_URL } from '../../config';
import { RouterLink } from 'vue-router';

  export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login() {
            axios.post(API_URL + '/api/login', {
                email: this.email,
                password: this.password
            })
                .then(response => {
                const { user, token } = response.data;
                localStorage.setItem('userId', user.id);
                localStorage.setItem('userName', user.name);
                localStorage.setItem('authToken', token);
                localStorage.setItem('role', user.roles);
                window.location.href = '/';
                console.log(response.data);
            })
                .catch(error => {
                console.error(error);
            });
        }
    },
    components: { RouterLink }
};
  </script>
  
  <style>

  
    .form-group {
      margin-bottom: 15px;
    }
  
    .form-control {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
    }
  
    .btn {
      padding: 10px;
      cursor: pointer;
    }
  </style>
  