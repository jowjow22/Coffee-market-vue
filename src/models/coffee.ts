export interface ICoffee {
  id: number;
  name: string;
  description: string;
  categories: string[];
  price: number;
  imgSource: string;
}

export interface ICoffeeToCard {
  id: number;
  name: string;
  description: string;
  categories: string[];
  price: number;
  imgSource: string;
  quantity: number;
}
