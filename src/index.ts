import calculateCartTotalPrice from "./priceCalculator/calculateCartTotalPrice";
import { Product, ProductType } from "./types";

const product: Product = {
  id: "test-product",
  net_price: 45,
  type: ProductType.EDUCATION,
  name: "Travel Bag",
  brand: {
    id: "prod-brand",
    name: "my-new-brand",
  },
  discount: {
    isEnabled: true,
    percentage: 0.04,
  },
};

const cart = {
  items: [
    {
      product,
      quantity: 1,
    },
  ],
};

const value = calculateCartTotalPrice(cart);

console.log(value);
