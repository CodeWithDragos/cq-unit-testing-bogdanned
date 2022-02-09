import filterAndSortByDiscount from "../filterFunctions/filterAndSortByDiscount";
import { Brand, Product, ProductType } from "../types";

const testBrand: Brand = {
  id: "test-brand",
  name: "test-brand-name",
};

describe("Filter and sort by discount", () => {
  describe("When the product list is empty", () => {
    it("returns an empty list", () => {
      // ACT
      const productList = filterAndSortByDiscount([]);

      // ASSERT
      expect(productList).toEqual([]);
    });
  });

  describe("When the product list has no discounted products", () => {
    // ARRANGE
    const prod: Product = {
      id: "test-product",
      name: "Travel Bag",
      net_price: 10,
      discount: {
        isEnabled: false,
        percentage: 0,
      },
      brand: testBrand,
      type: ProductType.FOOD,
    };

    it("returns an empty list", () => {
      // ACT
      const productList = filterAndSortByDiscount([prod]);

      // ASSERT
      expect(productList).toEqual([]);
    });
  });

  describe("When the product list has products with and without discount", () => {
    // ARRANGE
    const prodWithoutDiscount: Product = {
      id: "test-product",
      name: "Travel Bag",
      net_price: 10,
      discount: {
        isEnabled: false,
        percentage: 0,
      },
      brand: testBrand,
      type: ProductType.FOOD,
    };

    const prodWithDiscount: Product = {
      name: "Nike Sport Shoes",
      id: "test-product-with-discount",
      net_price: 16,
      discount: {
        isEnabled: true,
        percentage: 12,
      },
      brand: testBrand,
      type: ProductType.FOOD,
    };

    it("returns only the discounted products", () => {
      // ACT
      const productList = filterAndSortByDiscount([
        prodWithoutDiscount,
        prodWithDiscount,
      ]);

      // ASSERT
      expect(productList).toEqual([prodWithDiscount]);
    });
  });

  describe("When the product list has different products with discount", () => {
    const prodWithDiscount: Product = {
      id: "test-product-with-discount",
      name: "Shoes",
      net_price: 20,
      discount: {
        isEnabled: true,
        percentage: 10,
      },
      brand: testBrand,
      type: ProductType.FOOD,
    };

    const anotherProdWithDiscount: Product = {
      id: "test-product-with-discount",
      name: "Bag",
      net_price: 10,
      discount: {
        isEnabled: true,
        percentage: 5,
      },
      brand: testBrand,
      type: ProductType.FOOD,
    };

    it("returns the discounted products in the correct order", () => {
      // ACT
      const productList = filterAndSortByDiscount([
        prodWithDiscount,
        anotherProdWithDiscount,
      ]);

      // ASSERT
      expect(productList).toEqual([anotherProdWithDiscount, prodWithDiscount]);
    });
  });
});
