<template>
    <div class="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          {{ item.name }} - ${{ item.price }}
        </li>
      </ul>
      <button @click="shareOnWhatsApp">Ask Us</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      cartItems: Array,
    },
    methods: {
      shareOnWhatsApp() {
        const message = this.cartItems.map(item => `${item.name} - $${item.price}`).join('\n');
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      },
    },
  };
  </script>
  
  <style scoped>
  .shopping-cart {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 50%;
    margin: 1rem auto;

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
    background-color: #0056b3;
  }
  @media (max-width: 768px) {
    .shopping-cart {
      width: 50%;
    }
  }
  </style>
  