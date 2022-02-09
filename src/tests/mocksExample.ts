import { Brand, Product, ProductType } from "../types";

export const foodBrand: Brand = {
  id: "food-brand",
  name: "Food Inc",
};

export const foodBrandPremium: Brand = {
  id: "premium-foods",
  name: "Premium Foods",
};

export const muffin: Product = {
  id: "test-id",
  name: "Muffin",
  brand: foodBrand,
  net_price: 60,
  discount: {
    isEnabled: false,
    percentage: 0,
  },
  type: ProductType.FOOD,
};

export const bagelsDiscounted: Product = {
  id: "bagels-discounted",
  name: "Bagels",
  brand: foodBrand,
  net_price: 60,
  discount: {
    isEnabled: true,
    percentage: 50,
  },
  type: ProductType.FOOD,
};

export const chocolatePremium: Product = {
  id: "test-id",
  name: "Bagels",
  brand: foodBrandPremium,
  net_price: 120,
  discount: {
    isEnabled: false,
    percentage: 0,
  },
  type: ProductType.FOOD,
};
