import { Brand, Product, ProductType } from "../types";
import calculateGrossPrice from "../priceCalculator/calculateGrossPrice";

const testBrand: Brand = {
  id: "test-brand",
  name: "test-brand-name"
}

describe("Gross price calculation", () => {
  describe("with a product of type FOOD", () => {
    it("applies the 7% tax rate", () => {
      // ARRANGE
      const prod: Product = {
        name: "Muffin Pack",
        id: "test-product",
        net_price: 10,
        discount: {
          isEnabled: false,
          percentage: 0,
        },
        brand: testBrand,
        type: ProductType.FOOD,
      };

      // ACT
      const gross = calculateGrossPrice(prod);

      // ASSERT
      expect(gross).toEqual(10 * 1.07);
    });
  });
  describe("with a product of type EDUCATION", () => {
    it("applies the 10% tax rate", () => {
      // ARRANGE
      const prod: Product = {
        id: "test-product",
        name: "Coding Book",
        net_price: 10,
        brand: testBrand,
        discount: {
          isEnabled: false,
          percentage: 0,
        },
        type: ProductType.EDUCATION,
      };

      // ACT
      const gross = calculateGrossPrice(prod);

      // ASSERT
      expect(gross).toEqual(10 * 1.1);
    });
  })
  describe("with a product of any other type", () => {
    it("applies the 19% tax rate", () => {
      // ARRANGE
      const prod: Product = {
        id: "test-product",
        name: "Travel Bag",
        net_price: 10,
        brand: testBrand,
        discount: {
          isEnabled: false,
          percentage: 0,
        },
        type: ProductType.REGULAR_GOODS
      };

      // ACT
      const gross = calculateGrossPrice(prod);

      // ASSERT
      expect(gross).toEqual(10 * 1.19);
    });
  })
});
