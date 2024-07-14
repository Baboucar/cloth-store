<template>
    <div class="flex-desktop">
      <header class="header">
        <div class="logo">
         <router-link class="logo" to="/"> Jobis</router-link>
        </div>
        <div class="menu-button" @click="toggleMenu">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </header>
      <nav class="nav" :class="{ fixed: isFixed }" v-if="isMenuVisible || isWideScreen">
        <router-link to="/" active-class="active-link">Home</router-link>
        <router-link to="/shop" active-class="active-link">Shop</router-link>
        <router-link to="" active-class="active-link">About</router-link>
        <router-link to="" active-class="active-link">Contact</router-link>
      </nav>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  export default {
    setup() {
      const isMenuVisible = ref(false);
      const isWideScreen = ref(window.innerWidth >= 64 * 16); // 64rem in pixels
      const isFixed = ref(false);
  
      const toggleMenu = () => {
        isMenuVisible.value = !isMenuVisible.value;
      };
  
      const checkScreenWidth = () => {
        isWideScreen.value = window.innerWidth >= 64 * 16;
      };
  
      const handleScroll = () => {
        isFixed.value = window.scrollY > 0;
      };
  
      onMounted(() => {
        window.addEventListener('resize', checkScreenWidth);
        window.addEventListener('scroll', handleScroll);
      });
  
      onUnmounted(() => {
        window.removeEventListener('resize', checkScreenWidth);
        window.removeEventListener('scroll', handleScroll);
      });
  
      return {
        isMenuVisible,
        isWideScreen,
        toggleMenu,
        isFixed,
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
    transition: all 0.3s ease;
  }
  
  .nav.fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    margin-top: 0;
    height: auto;
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

  
  .logo {
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
      background: #FFFFFF;
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
  
  .active-link {
    color: #ad6343 !important;
  }
  </style>
  