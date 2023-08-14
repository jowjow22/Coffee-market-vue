import { IOrder } from "@/models/order";
import { defineStore } from "pinia";
import { getKey, setKey } from "@/utils/localStorage";

const STORE_NAME = "order";

export const useOrderStore = defineStore(STORE_NAME, {
  state: () => ({
    order: {} as IOrder,
  }),
  getters: {
    orderTotalPrice: ({ order }) => {
      return order.total + order.deliveryValue;
    },
    getAdress: ({ order }) => {
      return order.address;
    },
    getPaymentMethod: ({ order }) => {
      switch (order.paymentMethod) {
        case "creditCard":
          return "Cartão de crédito";
        case "debitCard":
          return "Cartão de débito";
        case "cash":
          return "Dinheiro";
        default:
          return "";
      }
    },
  },
  actions: {
    registerOrder(order: IOrder) {
      this.order = order;
      setKey(STORE_NAME, this.order);
      this.saveAddress();
    },
    saveAddress() {
      setKey("adress", this.order.address);
    },
    loadOrder() {
      const order = getKey(STORE_NAME);
      if (order) {
        this.order = order;
      }
    },
  },
});
