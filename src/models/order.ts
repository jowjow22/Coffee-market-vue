import { ICoffeeToCard } from "./coffee";

export interface IAddress {
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  cep: string;
}

export type PaymentMethod = "creditCard" | "debitCard" | "cash" | "";

export interface IOrder {
  id: number;
  address: IAddress;
  paymentMethod: PaymentMethod;
  order: ICoffeeToCard[];
  total: string;
  deliveryValue: number;
}
