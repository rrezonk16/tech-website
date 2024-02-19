<script>
import banner from '../assets/banner.png'

export default {
  data() {
    return {
      banner: banner,
      searchQuery: ''
    }
  },
  methods: {
    searchProducts() {
      this.$router.push({ path: '/search-products', query: { search: this.searchQuery } })
    }
  }
}
</script>

<template>
  <div class="container">
    <div class=" image-container">
      <form @submit.prevent="searchProducts" class="search-form">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search for products"
          class="search-input"
        />
        <button type="submit" class="search-button">
          <svg
            fill="black"
            height="25px"
            width="25px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 488.4 488.4"
            xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <path
                    d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </form>
    </div>
  </div>
</template>

<style>
.image-container {
  position: relative;
  background-image: url('../assets/banner.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 50vh;
  margin-top: 50px;
}

.search-container {
  border-radius: 15px;
}
.search-button {
  font-size: 30px;
  font: bolder;
  position: absolute;
  top: 87%;
  left: 72%;
  transform: translate(-50%, -50%);
  color: white;
}
.search-input:focus {
  border: none;
}
.search-input {
  width: 50%;
  font-size: 25px;
  padding: 20px 0px 20px 20px;
  font: bolder;
  position: absolute;
  top: 87%;
  left: 50%;
  border-radius: 19px;
  transform: translate(-50%, -50%);
}
@media screen and (max-width: 768px) {
  .search-input {
  width: 70%;
  top: 85%;
  left: 50%;
}
.search-button {
  top: 85%;
  left: 80%;
}
}

@media screen and (max-width: 430px) {
  .search-input {
  width: 90%;
  top: 85%;
  left: 50%;
}
.search-button {
  top: 85%;
  left: 88%;
}
}
</style>
