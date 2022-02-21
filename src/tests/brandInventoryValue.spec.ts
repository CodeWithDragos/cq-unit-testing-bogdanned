import { Brand } from "../types";
import { brandInventoryValue } from "../priceCalculator/brandInventoryValue";
import { foodBrand, muffin } from "./mocksExample";

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
  describe('when the inventory contains one item of the given brand', () => { 
      // ACT
      describe("given the brand is the one of the item", () => {
        it("returns the net price of the product", ()=> {
          const result = brandInventoryValue([muffin], foodBrand);
          expect(result).toEqual(muffin.net_price)
        })
      })
      describe("given another brand", () => {
        it("returns 0", ()=> {
          const result = brandInventoryValue([muffin], testBrand);
          expect(result).toEqual(0)
        })
      })
   })
   describe('when the inventory contains several items of the given brand', () => { 
    // ACT
    describe("given the brand is the one of the item", () => {
      it("returns the net price of the product", ()=> {
        const result = brandInventoryValue([muffin, muffin], foodBrand);
        expect(result).toEqual(muffin.net_price * 2)
      })
    })
 })
});
