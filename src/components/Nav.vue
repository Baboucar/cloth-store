<template>
    <div class="flex-desktop">
      <header class="header">
        <div class="logo">
          Jobis
        </div>
        <div class="menu-button" @click="toggleMenu">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </header>
      <nav class="nav" v-if="isMenuVisible || isWideScreen">
        <router-link to="" active-class="active">Home</router-link>
        <router-link to="" active-class="active">Shop</router-link>
        <router-link to="" active-class="active">About</router-link>
        <router-link to="" active-class="active">Contact</router-link>
      </nav>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  export default {
    setup() {
      const isMenuVisible = ref(false);
      const isWideScreen = ref(window.innerWidth >= 64 * 16); // 64rem in pixels
  
      const toggleMenu = () => {
        isMenuVisible.value = !isMenuVisible.value;
      };
  
      const checkScreenWidth = () => {
        isWideScreen.value = window.innerWidth >= 64 * 16;
      };
  
      onMounted(() => {
        window.addEventListener('resize', checkScreenWidth);
      });
  
      onUnmounted(() => {
        window.removeEventListener('resize', checkScreenWidth);
      });
  
      return {
        isMenuVisible,
        isWideScreen,
        toggleMenu,
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .nav {
    margin-top: 2rem;
    background: #EEE5DF;
    width: 100%;
    height: 700px;
  }
  
  .nav a {
    display: block;
    text-align: right;
    padding-top: 1rem;
    font-size: 1.5rem;
    color: #30362C;
    margin-right: 4rem;
  }
  
  .header {
    display: flex;
    margin: 1rem;
  }
  
  .menu-button {
    margin-left: auto;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
  }
  
  .line {
    height: 2px;
    background-color: #333;
    border-radius: 2px;
  }
  
  .line:first-child {
    width: 10px;
    align-self: flex-end;
  }
  
  .line:nth-child(2) {
    width: 20px;
    align-self: flex-end;
  }
  
  .line:last-child {
    width: 30px;
    align-self: flex-end;
  }
  .logo{
    
    font-weight: bold;
    color: #333;
    letter-spacing: 8px;
  }
  @media (min-width: 64rem) {
    .menu-button {
      display: none;
    }
    .nav {
      display: block !important;
      height: auto;
      background: none;
      margin-top: 1rem;
      margin-left: 25rem;
    }
    .nav a {
      display: inline;
      text-align: left;
      padding-top: 0;
      margin-right: 1rem;
      font-size: 1rem;
      padding-left: 1rem;
    }
  
    .flex-desktop {
      display: flex;
    }
  }
  
  .router-link-active {
    color: #ad6343;
  }
  </style>
  