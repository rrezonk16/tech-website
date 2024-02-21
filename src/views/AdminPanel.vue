<template>
  <main>
    <div class="w-full bg-blue-300 justify-center items-center text-center gap-3 flex p-3">
      <button @click="showLoadingAndProductsTable" class="h-10 border-2 p-2 py-1  border-blue-400 rounded-lg hover:bg-blue-200 ">Manage Products</button>
      <button @click="showLoadingAndOrdersTable" class="h-10 border-2 p-2 py-1  border-blue-400 rounded-lg hover:bg-blue-200 ">Manage Orders</button>
    </div>

    <div v-if="loading" class="loading-screen">
      <div class="loading-spinner"></div>
      <p class="loading-text">{{ loadingText }}</p>
    </div>

    <ProductsTable v-if="showProducts" />
    <OrdersTable v-if="showOrders" />
  </main>
</template>

<script setup>
import OrdersTable from '@/components/Admin/OrdersTable.vue';
import ProductsTable from '@/components/Admin/ProductsTable.vue';
import { onMounted, ref } from 'vue';

const showProducts = ref(true);
const showOrders = ref(false);
const loading = ref(false);
const loadingText = ref("Loading...");
onMounted(() => {
  simulateLoading();
});

const simulateLoading = () => {
  showLoading();
  setTimeout(() => {
    hideLoading();
    showProducts.value = true;
  }, 1000);
};

const showLoadingAndProductsTable = () => {
  showProducts.value = true;
    showOrders.value = false;
  showLoading();
  setTimeout(() => {
    hideLoading();

  }, 1000);
};

const showLoadingAndOrdersTable = () => {
  showProducts.value = false;
    showOrders.value = true;
  showLoading();
  setTimeout(() => {
    hideLoading();

  }, 1000);
};

const showLoading = () => {
  loading.value = true;
};

const hideLoading = () => {
  loading.value = false;
};
</script>

<style scoped>
.loading-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loading-spinner {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}
</style>
