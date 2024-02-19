<template>
    
    <div class="container flex flex-col">
      <p class="text-3xl font-extrabold italic">For Sale Items</p>
      <div class="flex flex-wrap">
      <div class="w-1/2 md:px-4 md:py-4 p-1 md:w-1/4 " v-for="product in products" :key="product.id">
        <div class="flex flex-col rounded-2xl border-blue-300 border p-3 justify-between h-full">
          <p class="font-bold text-lg">{{ product.name }}</p>
          <div class="rounded-2xl border-blue-300 border w-full my-3">
            <img :src="product.image" alt="" class="rounded-2xl" />
          </div>
          <p class="font-bold text-lg">{{ '$' + parseFloat(product.price).toFixed(2) }}</p>
          <p class="text-base italic">{{ product.description }}</p>
          <button class="mt-4 text-center w-full">
            <RouterLink :to="'/products/' + product.slug" class="mr-9 text-neutral-800">
              Read More
            </RouterLink>
          </button>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { API_URL } from '../../config';

  export default {
    data: function () {
      return {
        products: [],
      };
    },
    
    mounted() {
      axios.get(API_URL+'/api/products-sale')
        .then(response => {
          this.products = response.data;
        })
        
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
  };

  </script>
  