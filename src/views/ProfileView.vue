<template>
    <div class=" h-96 flex items-center justify-center">
      <form @submit.prevent="login" class="bg-white p-8 shadow-md rounded-md w-96">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <input type="name" id="name" v-model="name" class="w-full border border-blue-400 p-2 rounded-lg" />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input type="email" id="email" v-model="email" class="w-full border border-blue-400 p-2 rounded-lg" />
        </div>

        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300">Save</button>
    
      </form>
    
    </div>
  </template>
  
    <script>
import axios from 'axios';
import { API_URL } from '../../config';
import { AUTH_TOKEN } from '../../config';

export default {
  data() {
    return {
      email: '',
      name: ''
    };
  },
  mounted() {
    axios.get(API_URL + '/api/user/data', {
      headers: {
        Authorization: `Bearer ${AUTH_TOKEN}`
      }
    })
      .then(response => {
        const userData = response.data;
        this.email = userData.email;
        this.name = userData.name;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  },
  methods: {
    login() {
      axios.post(
        API_URL + '/api/user/edit',
        {
          email: this.email,
          name: this.name
        },
        {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`
          }
        }
      )
        .then(response => {
          const { user } = response.data;
          localStorage.setItem('userId', user.id);
          localStorage.setItem('userName', user.name);
          window.location.reload();
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
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
    