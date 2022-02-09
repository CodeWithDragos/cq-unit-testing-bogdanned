import calculatePriceAfterDiscount from "../priceCalculator/calculatePriceAfterDiscount";

describe("calculatePriceAfterDiscount", () => {
  describe("when the price is zero", () => {
    it("returns 0", () => {
      const result = calculatePriceAfterDiscount(0, 0);
      expect(result).toEqual(0);
    });
  });
  describe("when the price is non zero", () => {
    describe("given discount zero", () => {
      it("it returns the original price", () => {
        const result = calculatePriceAfterDiscount(100, 0);
        expect(result).toEqual(100);
      });
    });
    describe("given discount 10%", () => {
      it("it returns the right discounted price", () => {
        const result = calculatePriceAfterDiscount(100, 10);
        expect(result).toEqual(90);
      });
    });
  });
});
