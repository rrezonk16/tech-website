<template>
    <div class="container mt-5">
        <button
      @click="navigateToAddProduct"
      class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
    >
      + Add New Product
    </button>
      <table class="table-auto w-full border border-collapse">
        <thead>
          <tr>
            <th class="px-4 py-2 border">Name</th>
            <th class="px-4 py-2 border">Image</th>
            <th class="px-4 py-2 border">Price</th>
            <th class="px-4 py-2 border">Description</th>
            <th class="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td class="border px-4 py-2">{{ product.name }}</td>
            <td class="border px-4 py-2">
              <img :src="product.image" alt="" class="rounded-2xl w-11" />
            </td>
            <td class="border px-4 py-2">{{ '$' + parseFloat(product.price).toFixed(2) }}</td>
            <td class="border px-4 py-2">{{ product.description }}</td>
            <td class="border px-4 py-2">
              <button @click="editProduct(product.slug)" class="mr-2 text-neutral-800">Edit</button>
              <button @click="deleteProduct(product.slug)" class="text-red-600">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { API_URL } from '../../../config';
  console.log(API_URL);
  
  export default {
    data() {
      return {
        products: [],
      };
    },
    mounted() {
      axios
        .get(API_URL + '/api/products')
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    },
    methods: {
        navigateToAddProduct() {

      this.$router.push('/add-product');
    },
      editProduct(slug) {
        this.$router.push(`/edit-product/${slug}`);

      },
      deleteProduct(slug) {
        const authToken = localStorage.getItem('authToken');
      const headers = authToken ? { Authorization: `Bearer ${authToken}` } : {};
        axios
        .delete(API_URL + '/api/delete-item/' + slug, { headers })
          .then((response) => {
            console.log('Product deleted successfully:', response.data);
            window.location.reload()
          })
          .catch((error) => {
            console.error('Error deleting product:', error);
          });
      },
    },
  };
  </script>
  