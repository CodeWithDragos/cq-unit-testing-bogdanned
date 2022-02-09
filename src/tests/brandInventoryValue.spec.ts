import { Brand } from "../types";
import { brandInventoryValue } from "../priceCalculator/brandInventoryValue";

// Arrange
const testBrand: Brand = {
  id: "test-brand",
  name: "test-brand-name",
};
describe("Brand inventory value", () => {
  describe("when the inventory contains one brand item", () => {
    it("returns the price of the item", () => {
      // ACT
      const value = brandInventoryValue([], testBrand);

      // ASSERT
      expect(value).toEqual(0);
    });
  });
});
