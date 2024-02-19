<template>
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-1/2 px-4 py-4 md:w-1/4" v-for="product in products" :key="product.id">
          <div class="flex flex-col rounded-2xl border-blue-300 border p-3 justify-between h-full">
            <p class="font-bold text-lg">{{ product.name }}</p>
            <div class="rounded-2xl border-blue-300 border w-full my-3">
              <img :src="product.image" alt="" class="rounded-2xl" />
            </div>
            <p class="font-bold text-lg">{{ '$' + parseFloat(product.price).toFixed(2) }}</p>
            <p class="text-base italic">{{ product.description }}</p>
            <router-link :to="'/products/' + product.slug" class="mt-4 text-center w-full">
              Read More
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import { API_URL } from '../../config';

  export default {

    data() {
      return {
        products: []
      };
    },
    mounted() {
      const searchParam = this.$route.query.search || ''; 
      axios
      .get(API_URL+`/api/products/search/${searchParam}`)
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    },
  }
  </script>
  