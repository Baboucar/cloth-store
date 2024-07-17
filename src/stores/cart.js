import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),
  getters: {
    cartItemCount(state) {
      return state.cartItems.length;
    },
    getCartItems(state) {
      return state.cartItems;
    },
  },
  actions: {
    addToCart(item) {
      this.cartItems.push(item);
    },
  },
});
