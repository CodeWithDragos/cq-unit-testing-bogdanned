import calculateCartItemPrice from "../priceCalculator/calculateCartItemPrice";
import { CartItem } from "../types";
import { bagelsDiscounted, muffin } from "./mocksExample";

// ARRANGE */
jest.mock("../priceCalculator/calculateGrossPrice", () => {
  const originalModule = jest.requireActual(
    "../priceCalculator/calculateGrossPrice"
  );

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => 10),
  };
});

jest.mock("../priceCalculator/calculatePriceAfterDiscount", () => {
  const originalModule = jest.requireActual(
    "../priceCalculator/calculatePriceAfterDiscount"
  );

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => 0),
  };
});

describe("calculateCartItemPrice", () => {
  describe("Given a cart item", () => {
    describe("When the quantity is one", () => {
      describe("and the product has no discount", () => {
        const cartItem: CartItem = {
          product: muffin,
          quantity: 1,
        };
        it("returns the right price object", () => {
          const result = calculateCartItemPrice(cartItem);
          expect(result).toEqual({
            net_price: muffin.net_price,
            gross_price: 10,
            gross_price_discounted: 10,
          });
        });
      });
      describe("and the product has a discount", () => {
        const cartItem: CartItem = {
          product: bagelsDiscounted,
          quantity: 1,
        };
        it("returns the right price object", () => {
          const result = calculateCartItemPrice(cartItem);
          expect(result).toEqual({
            net_price: bagelsDiscounted.net_price,
            gross_price: 10,
            gross_price_discounted: 0,
          });
        });
      });
    });
  });
});
