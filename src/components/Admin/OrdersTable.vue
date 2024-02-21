
<script>
import axios from 'axios'
import { API_URL } from '../../../config'
import { AUTH_TOKEN } from '../../../config'
import NoOrders from '@/components/NoOrders.vue'

import { ref } from 'vue'
const isLoading = ref(false);

export default {
  components: { NoOrders },
  data() {
    return {
      products: [],
      showNoOrders: false
    }
  },
  mounted() {
    isLoading.value = true;
    axios
      .get(API_URL + `/api/orders/all`, {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`
        }
      })
      .then((response) => {
        isLoading.value = false;

        this.products = this.processOrderData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        this.showNoOrders = true
      })
  },
  methods: {
    updateOrderStatus(productOrder) {
      const url = `${API_URL}/api/orders/status/${productOrder.id}`
      const updatedStatus = parseInt(productOrder.updatedStatus)

      axios
        .put(
          url,
          { status: updatedStatus },
          {
            headers: {
              Authorization: `Bearer ${AUTH_TOKEN}`
            }
          }
        )
        .then((response) => {
          console.log('Order status updated successfully:', response.data)
        })
        .catch((error) => {
          console.error('Error updating order status:', error)
        })
    },
    processOrderData(userOrders) {
      return userOrders.map((order) => {
        let updatedStatus = 'Order Processed'

        if (order.status === 1) {
          updatedStatus = 'Order Shipped'
        } else if (order.status === 2) {
          updatedStatus = 'Order Arrived'
        }

        return {
          ...order,
          status: updatedStatus
        }
      })
    }
  }
}
</script>
<template>
    
        <LoadingScreen v-if="isLoading" />

  <div class="container">
    <div>
      <no-orders v-if="showNoOrders" />
    </div>
    <div class="flex flex-wrap">
      <div
        class="w-full md:px-4 md:py-4 p-1"
        v-for="productOrder in products"
        :key="productOrder.id"
      >
        <div class="flex flex-row rounded-2xl border-blue-300 border p-3 gap-4 h-full">
          <div class="rounded-2xl border-blue-300 border w-1/4">
            <img :src="productOrder.product.image" alt="" class="rounded-2xl" />
          </div>
          <div class="flex flex-col justify-between">
            <div>
              <p class="font-bold text-lg">Order ID: {{ productOrder.id }}</p>
              <p class="font-bold text-lg">User ID: {{ productOrder.user_id }}</p>

              <p class="font-bold text-lg">{{ productOrder.product.name }}</p>
              <p class="font-bold text-lg">
                {{ '$' + parseFloat(productOrder.product.price).toFixed(2) }}
              </p>
            </div>
            <div class="flex items-center gap-2">
              <p class="font-thin italic text-xl">{{ productOrder.status }}</p>
            </div>
          </div>
          <div class="flex flex-col w-1/2">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Change Order Status</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" v-model="productOrder.updatedStatus" @change="updateOrderStatus(productOrder)">
              <option value="0">Order Processed</option>
              <option value="1">Order Shipped</option>
              <option value="2">Order Arrived</option>
            </select>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
  