<template>
    <div class="shop-item">
      <img :src="item.image" :alt="item.name" class="item-image" />
      <h3>{{ item.name }}</h3>
      <p class="price">${{ item.price }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../stores/cart';
  
  export default {
    props: {
      item: Object,
    },
    setup(props) {
      const cartStore = useCartStore();
  
      const addToCart = () => {
        cartStore.addToCart(props.item);
      };
  
      return {
        addToCart,
      };
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
    color: #AD6342;
  }
  
  button {
    background-color: #AD6342;
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
  