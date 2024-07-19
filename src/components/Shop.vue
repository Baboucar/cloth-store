<template>
    <div id="app">
    
      <h1 class="title">Shop All</h1>
      <div class="shop-items">
        <ShopItem
          v-for="item in items"
          :key="item.id"
          :item="item"
          @add-to-cart="addToCart"
        />
      </div>
      <div>
        <!-- <ShoppingCart :cartItems="cartItems" /> -->
      </div>
      <Footer/>
    </div>
  </template>
  
  <script>
  import Footer from "./Footer.vue";
  import ShopItem from './ShopItem.vue';
  import ShoppingCart from './ShoppingCart.vue';
  import Nav from "./Nav.vue";
  
  export default {
    components: {
      ShopItem,
      ShoppingCart,
      Nav,
      Footer,
    },
    data() {
      return {
        items: [
          { id: 2, name: 'Relaxed Boyfriend Tee', price: 30.00, image: 'images/1.png' },
          { id: 3, name: 'Linen A-Line Skirt', price: 35.00, image: 'images/2.png' },
          { id: 4, name: 'Cotton V-Neck T-Shirt', price: 25.00, image: 'images/3.png' },
          { id: 4, name: 'Cotton V-Neck T-Shirt', price: 25.00, image: 'images/1.png' },
          { id: 4, name: 'Cotton V-Neck T-Shirt', price: 25.00, image: 'images/2.png' },
          { id: 4, name: 'Cotton V-Neck T-Shirt', price: 25.00, image: 'images/1.png' },
          { id: 4, name: 'Cotton V-Neck T-Shirt', price: 25.00, image: 'images/2.png' },
          { id: 4, name: 'Cotton V-Neck T-Shirt', price: 25.00, image: 'images/3.png' },
          // Add other items here
        ],
        cartItems: [],
      };
    },
    methods: {
      addToCart(item) {
        this.cartItems.push(item);
      },
    },
  };
  </script>
  
  <style>
  img {
    max-width: 100%;
    height: auto;
  }
  
  .title {
    text-align: center;
  }
  
  @media (min-width: 64rem) {
    .shop-items {
      width: 80%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  </style>
  