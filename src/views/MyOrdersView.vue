<template>
    <div class="container">
        <div>
            <no-orders v-if="showNoOrders" />
        </div>
      <div class="flex flex-wrap">
        <div class="w-full md:px-4 md:py-4 p-1" v-for="productOrder in products" :key="productOrder.id">
          <div class="flex flex-row rounded-2xl border-blue-300 border p-3 gap-4 h-full">
            <div class="rounded-2xl border-blue-300 border w-1/4">
              <img :src="productOrder.product.image" alt="" class="rounded-2xl" />
            </div>
            <div class="flex flex-col justify-between">
              <div>
                <p class="font-bold text-lg">{{ productOrder.product.name }}</p>
                <p class="font-bold text-lg">{{ '$' + parseFloat(productOrder.product.price).toFixed(2) }}</p>
                <p class="text-base italic">{{ productOrder.product.description }}</p>
              </div>
              <div class="flex flex-col">
                <p>Order Status</p>
                <div class="tracking-wrapper">
                  <div class="tracking">
                    <div :class="'progress-' + productOrder.status">
                      <div class="empty-bar"></div>
                      <div class="color-bar"></div>
                      <ul>
                        <li  class="bullet-1">
                          <div class="el"><i class="bx bx-check"></i></div>
                          <div class="txt">Order Processed</div>
                        </li>
                        <li  class="bullet-2">
                          <div class="el"><i class="bx bx-check"></i></div>
                          <div class="txt">Order Shipped</div>
                        </li>
                        <li class="bullet-4">
                          <div class="el"><i class="bx bx-check"></i></div>
                          <div class="txt">Order Arrived</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import { API_URL } from '../../config'
  import { AUTH_TOKEN } from '../../config'
import NoOrders from '@/components/NoOrders.vue'
  const userId = localStorage.getItem('userId')
  
  export default {
  components: { NoOrders },
    data() {
      return {
        products: [],
        showNoOrders: false 
      }
    },
    mounted() {
      axios
        .get(API_URL + `/api/my-orders/${userId}`, {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`
          }
        })
        .then((response) => {
          this.products = this.processOrderData(response.data.user_orders);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          this.showNoOrders = true; // Set flag to true when there's an error
        });
    },
    methods: {
      processOrderData(userOrders) {
        return userOrders.map(order => {
          let updatedStatus = 0;
  
          if (order.status === 1) {
            updatedStatus = 3;
          } else if (order.status === 2) {
            updatedStatus = 7;
          }
  
          return {
            ...order,
            status: updatedStatus,
          };
        });
      }
    }
  }
  </script>

<style>
/* vars */
:root {
  --back: #eeeeee;
  --blue: #0082d2;
  --green: #33ddaa;
  --gray: #777777;
  --size: 200px;
}

.tracking-wrapper {
  margin: 30px;
  padding: 0;
}
.tracking * {
  padding: 0;
  margin: 0;
}
.tracking {
  width: var(--size);
  max-width: 100%;
  position: relative;
}
.tracking .empty-bar {
  background: #ddd;
  position: absolute;
  width: 90%;
  height: 20%;
  top: 40%;
  margin-left: 5%;
}
.tracking .color-bar {
  background: var(--blue);
  position: absolute;
  height: 20%;
  top: 40%;
  margin-left: 5%;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
}
.tracking ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
}
.tracking ul > li {
  background: #ddd;
  text-align: center;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  z-index: 1;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center center;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  display: inline-block;
  position: relative;
  width: 10%;
}
.tracking ul > li .el {
  position: relative;
  margin-top: 100%;
}
.tracking ul > li .el i {
  position: absolute;
  bottom: 100%;
  left: 8%;
  margin-bottom: 12%;
  color: #fff;
  font-size: 100%;
  display: none;
}
.tracking ul > li .txt {
  color: #999;
  position: absolute;
  top: 120%;
  left: -75%;
  text-align: center;
  width: 250%;
  font-size: 0.75rem;
}
.tracking .progress-0 .color-bar {
  width: 00%;
}
.tracking .progress-1 .color-bar {
  width: 15%;
}
.tracking .progress-2 .color-bar {
  width: 30%;
}
.tracking .progress-3 .color-bar {
  width: 45%;
}
.tracking .progress-4 .color-bar {
  width: 60%;
}
.tracking .progress-5 .color-bar {
  width: 75%;
}
.tracking .progress-6 .color-bar {
  width: 90%;
}
.tracking .progress-7 .color-bar {
  width: 90%;
}

.tracking .progress-0 > ul > li.bullet-1,
.tracking .progress-1 > ul > li.bullet-1,
.tracking .progress-2 > ul > li.bullet-1,
.tracking .progress-3 > ul > li.bullet-1,
.tracking .progress-4 > ul > li.bullet-1,
.tracking .progress-5 > ul > li.bullet-1,
.tracking .progress-6 > ul > li.bullet-1,
.tracking .progress-7 > ul > li.bullet-1 {
  background-color: var(--blue);
}

.tracking .progress-2 > ul > li.bullet-2,
.tracking .progress-3 > ul > li.bullet-2,
.tracking .progress-4 > ul > li.bullet-2,
.tracking .progress-5 > ul > li.bullet-2,
.tracking .progress-6 > ul > li.bullet-2,
.tracking .progress-7 > ul > li.bullet-2 {
  background-color: var(--blue);
}

.tracking .progress-4 > ul > li.bullet-3,
.tracking .progress-5 > ul > li.bullet-3,
.tracking .progress-6 > ul > li.bullet-3,
.tracking .progress-7 > ul > li.bullet-3 {
  background-color: var(--blue);
}

.tracking .progress-6 > ul > li.bullet-4,
.tracking .progress-7 > ul > li.bullet-4 {
  background-color: var(--blue);
}

.tracking .progress-7 > ul > li.bullet-4 {
  background-color: var(--green);
}

.tracking .progress-1 > ul > li.bullet-1 .el i,
.tracking .progress-2 > ul > li.bullet-1 .el i,
.tracking .progress-3 > ul > li.bullet-1 .el i,
.tracking .progress-4 > ul > li.bullet-1 .el i,
.tracking .progress-5 > ul > li.bullet-1 .el i,
.tracking .progress-6 > ul > li.bullet-1 .el i,
.tracking .progress-7 > ul > li.bullet-1 .el i {
  display: block;
}

.tracking .progress-3 > ul > li.bullet-2 .el i,
.tracking .progress-4 > ul > li.bullet-2 .el i,
.tracking .progress-5 > ul > li.bullet-2 .el i,
.tracking .progress-6 > ul > li.bullet-2 .el i,
.tracking .progress-7 > ul > li.bullet-2 .el i {
  display: block;
}

.tracking .progress-5 > ul > li.bullet-3 .el i,
.tracking .progress-6 > ul > li.bullet-3 .el i,
.tracking .progress-7 > ul > li.bullet-3 .el i {
  display: block;
}

.tracking .progress-7 > ul > li.bullet-4 .el i {
  display: block;
}

.tracking .progress-1 > ul > li.bullet-1 .txt,
.tracking .progress-2 > ul > li.bullet-1 .txt,
.tracking .progress-3 > ul > li.bullet-1 .txt,
.tracking .progress-4 > ul > li.bullet-1 .txt,
.tracking .progress-5 > ul > li.bullet-1 .txt,
.tracking .progress-6 > ul > li.bullet-1 .txt,
.tracking .progress-7 > ul > li.bullet-1 .txt {
  color: var(--blue);
}

.tracking .progress-3 > ul > li.bullet-2 .txt,
.tracking .progress-4 > ul > li.bullet-2 .txt,
.tracking .progress-5 > ul > li.bullet-2 .txt,
.tracking .progress-6 > ul > li.bullet-2 .txt,
.tracking .progress-7 > ul > li.bullet-2 .txt {
  color: var(--blue);
}

.tracking .progress-5 > ul > li.bullet-3 .txt,
.tracking .progress-6 > ul > li.bullet-3 .txt,
.tracking .progress-7 > ul > li.bullet-3 .txt {
  color: var(--blue);
}

.tracking .progress-7 > ul > li.bullet-4 .txt {
  color: var(--blue);
}

/* demo */
.controls {
  margin: 90px 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.controls > div {
  display: flex;
  justify-content: flex-start;
  align-items: space-between;
  margin: 0;
  padding: 0;
}
.controls p,
.controls button {
  border: 0;
  line-height: 20px;
  padding: 15px;
  font-size: 0.8rem;
  text-transform: uppercase;
}
.controls button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 6px;
  background: var(--blue);
  color: #fff;
  border-radius: 50px;
  transition: all 0.3s;
}
.controls button:nth-child(1) {
  margin-left: 0;
}
.controls button i {
  font-size: 1rem;
  margin: 0 5px;
}
.controls button#prev {
  padding-right: 30px;
}
.controls button#next {
  padding-left: 30px;
}

.controls button:hover,
.controls button:focus {
  outline: none;
  background-color: var(--green);
}
</style>
