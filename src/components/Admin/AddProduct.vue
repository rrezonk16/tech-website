<template>
  <div class="container mx-auto my-8">
    <form @submit.prevent="submitProduct" class="max-w-md mx-auto bg-white p-8 border rounded shadow">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <input type="text" id="name" v-model="product.name" class="w-full px-3 py-2 border rounded" />
      </div>
      <div class="mb-4">
        <label for="slug" class="block text-gray-700 text-sm font-bold mb-2">Slug:</label>
        <input type="text" v-model="product.slug" id="slug" required class="w-full px-3 py-2 border rounded" />
      </div>
      <div class="mb-4">
        <label for="description" class="block text-gray-700 text-sm font-bold mb-2">Description:</label>
        <textarea  id="description" v-model="product.description" required class="w-full px-3 py-2 border rounded"></textarea>
      </div>

      <div class="mb-4">
        <label for="price" class="block text-gray-700 text-sm font-bold mb-2">Price:</label>
        <input type="number" v-model="product.price"  id="price" required class="w-full px-3 py-2 border rounded" />
      </div>

      <div class="mb-4">
        <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Image URL:</label>
        <input type="text" v-model="product.image"  id="image" value="/images/" required class="w-full px-3 py-2 border rounded" />
      </div>

      <div class="mb-4">
        <label for="status" class="block text-gray-700 text-sm font-bold mb-2">Status:</label>
        <select  id="status" v-model="product.status"  required class="w-full px-3 py-2 border rounded">
          <option value="1">Sale</option>
          <option value="0">No sale</option>
        </select>
      </div>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Add Product</button>
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
        slug: '',
        status: 1,
      },
    };
  },
  methods: {
       getToken() {
      return localStorage.getItem('authToken');
    },
    submitProduct() {
      console.log(this.product);

      const token = this.getToken();
      
      axios.post(`${API_URL}/api/add-product`, this.product, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'Application/JSON',
        },
      })
      .then(response => {
  console.log('Product added successfully:', response.data);
  
  const shouldNavigate = window.confirm('Product added successfully! Do you want to view it?');
  
  if (shouldNavigate) {
    const slug = response.data.slug; 
    const productURL = `/products/${slug}`;
    window.location.href = productURL;
  }
})

        .catch(error => {
          console.error('Error adding product:', error);
        });
    },
}
}
</script>
