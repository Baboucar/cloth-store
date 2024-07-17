<template>
    <div class="cart-page">
      <h2>Your Cart</h2>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          {{ item.name }} - ${{ item.price }}
        </li>
      </ul>
      <button @click="checkout">Checkout</button>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useCartStore } from '../stores/cart';
  
  export default {
    setup() {
      const cartStore = useCartStore();
      const cartItems = computed(() => cartStore.getCartItems);
  
      const checkout = () => {
        const items = cartItems.value.map(item => `${item.name} - $${item.price}`).join('\n');
        const message = `Order Details:\n${items}`;
        const whatsappURL = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
      };
  
      return {
        cartItems,
        checkout,
      };
    },
  };
  </script>
  
  <style scoped>
  .cart-page {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
  }
  button {
    background-color: #ad6343;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
    transition: background-color 0.3s;
  }
  button:hover {
    background-color: #d55215;
  }
  </style>
  