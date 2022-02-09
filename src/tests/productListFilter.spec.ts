import productListFilter from "../filterFunctions/productListFilter";
import { FilterProperty, ProductFilter, ProductType } from "../types";
import { book, muffin } from "./mocksExample";

describe("productListFilter", () => {
  describe("Given an empty product list", () => {
    describe("When the filter list is empty", () => {
      it("it returns and empty array", () => {
        expect(productListFilter([], [])).toEqual([]);
      });
    });
  });
  describe("Given a list of one product", () => {
    describe("When the filter list is empty", () => {
      it("it returns and empty array", () => {
        expect(productListFilter([muffin], [])).toEqual([]);
      });
    });
    describe("When the filter list is discount and the value is true", () => {
      // Arrange
      const discountFilter: ProductFilter = {
        property: FilterProperty.DISCOUNT,
        value: true,
      };
      it("it returns and empty array if the product is not discounted", () => {
        expect(productListFilter([muffin], [discountFilter])).toEqual([]);
      });
    });
    describe("When the filter is by name", () => {
      // Arrange
      describe("and the name value matches the product", () => {
        it("it returns and the product that match the name", () => {
          const nameFilter: ProductFilter = {
            property: FilterProperty.NAME,
            search: "Muffin",
          };
          expect(productListFilter([muffin], [nameFilter])).toEqual([muffin]);
        });
      });
      describe("and the name value does not match the product", () => {
        it("it returns an empty list", () => {
          const nameFilter: ProductFilter = {
            property: FilterProperty.NAME,
            search: "Baggel",
          };
          expect(productListFilter([muffin], [nameFilter])).toEqual([]);
        });
      });
    });
    describe("When the filter is by type", () => {
      // Arrange
      const educationFilter: ProductFilter = {
        property: FilterProperty.TYPE,
        value: ProductType.EDUCATION,
      };
      it("it returns and empty array if the product is of a different type", () => {
        expect(productListFilter([book, muffin], [educationFilter])).toEqual([
          book,
        ]);
      });
    });
    describe("When the filter is by brand", () => {
      describe("Given a food brand", () => {
        const brandFilter: ProductFilter = {
          property: FilterProperty.BRAND,
          search: "Food",
        };
        it("it returns the product with food brand", () => {
          expect(productListFilter([book, muffin], [brandFilter])).toEqual([
            muffin,
          ]);
        });
      });
    });
  });
});
