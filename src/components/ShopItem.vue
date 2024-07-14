<template>
    <div class="shop-item">
      <v-lazy-image :src="item.image" :alt="item.name" class="item-image" />
      <h3>{{ item.name }}</h3>
      <p class="price">${{ item.price }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </template>
  
  <script>
  import { VLazyImage } from 'v-lazy-image';
  
  export default {
    components: {
      VLazyImage
    },
    props: {
      item: Object,
    },
    methods: {
      addToCart() {
        this.$emit('add-to-cart', this.item);
      },
    },
  };
  </script>
  
  <style scoped>
  .shop-item {
    width: 90%;
    height: auto;
    display: block;
    margin: 1rem auto;
  }
  .shop-item:hover {
    transition: ease-in 0.5s;
  }
  .price {
    color: #ad6342;
  }
  .item-image {
    width: 100%;
    height: auto;
  }
  button {
    background-color: #ad6342;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 2px;
    margin-top: 10px;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: #d55215;
  }
  </style>
  