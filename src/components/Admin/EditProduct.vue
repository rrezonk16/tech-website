<template>
  <div class="container mx-auto my-8">
    <form @submit.prevent="updateProduct" class="max-w-md mx-auto bg-white p-8 border rounded shadow">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <input type="text" v-model="product.name" id="name" required class="w-full px-3 py-2 border rounded" />
      </div>

      <div class="mb-4">
        <label for="description" class="block text-gray-700 text-sm font-bold mb-2">Description:</label>
        <textarea v-model="product.description" id="description" required class="w-full px-3 py-2 border rounded"></textarea>
      </div>

      <div class="mb-4">
        <label for="price" class="block text-gray-700 text-sm font-bold mb-2">Price:</label>
        <input type="number" v-model="product.price" id="price" required class="w-full px-3 py-2 border rounded" />
      </div>

      <div class="mb-4">
        <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Image URL:</label>
        <input type="text" v-model="product.image" id="image" required class="w-full px-3 py-2 border rounded" />
      </div>

      <div class="mb-4">
        <label for="status" class="block text-gray-700 text-sm font-bold mb-2">Status:</label>
        <select v-model="product.status" id="status" required class="w-full px-3 py-2 border rounded">
          <option value="1">Sale</option>
          <option value="0">No sale</option>
        </select>
      </div>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Update Product</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { API_URL } from '../../../config';

export default {
  data() {
    return {
      product: {
        name: '',
        description: '',
        price: 0,
        image: '',
        status: 1,
      },
    };
  },
  mounted() {
    // Get the slug from the URL
    const slug = this.$route.params.slug;

    // Fetch product data using the provided API
    axios.get(`${API_URL}/api/products/read/${slug}`)
      .then(response => {
        this.product = response.data[0];
        console.log(response);
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  },
  methods: {
    updateProduct() {
      // Get the slug from the URL
      const slug = this.$route.params.slug;

      // Update product using the provided API
      axios.put(`${API_URL}/api/update-products/${slug}`, this.product)
        .then(response => {
          console.log('Product updated successfully:', response.data);
          window.location.href="/admin"
        })
        .catch(error => {
          console.error('Error updating product:', error);
        });
    },
  },
};
</script>
