import { ICoffeeToCard } from "@/models/coffee";
import { defineStore } from "pinia";
import { getKey, setKey } from "@/utils/localStorage";

const STORE_NAME = "cart";

export const useCartStore = defineStore(STORE_NAME, {
  state: () => ({
    cart: [] as ICoffeeToCard[],
  }),
  getters: {
    cartTotalPrice: ({ cart }) => {
      return cart.reduce((acc, current) => {
        return acc + current.price * current.quantity;
      }, 0);
    },
    cartItems: ({ cart }) => {
      return cart;
    },
    cartTotalItems: ({ cart }) => {
      return cart.length;
    },
  },
  actions: {
    loadCart() {
      const cart = getKey(STORE_NAME);
      if (cart) {
        this.cart = cart;
      }
    },
    clearCart() {
      this.cart = [];
      setKey(STORE_NAME, this.cart);
    },
    addCoffeeToCart(coffee: ICoffeeToCard) {
      const coffeeInCart = this.cart.find((item) => item.id === coffee.id);
      if (coffeeInCart) {
        coffeeInCart.quantity = coffee.quantity;
      } else {
        this.cart.push(coffee);
      }
      setKey(STORE_NAME, this.cart);
    },
    removeFromCart(id: number) {
      this.cart = this.cart.filter((item) => item.id !== id);
      setKey(STORE_NAME, this.cart);
    },
    updateQuantity(id: number, quantity: number) {
      const coffeeInCart = this.cart.find((item) => item.id === id);
      if (coffeeInCart) {
        coffeeInCart.quantity = quantity;
      }
      setKey(STORE_NAME, this.cart);
    },
  },
});
