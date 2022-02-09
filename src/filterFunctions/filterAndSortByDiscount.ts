import { Product } from "../types";

/**
 * Filters a list of products and returns products with discount only.
 * The results is sorted, ascending:from lowest to higher net discount value.
 * The net discount value for a product is calculated with the following formula:
 * net_discount = net_price * (100 - discount.percentage) / 100
 * @param {Product[]} productList
 * @returns {Product[]} the list of filtered products
 */
export default function filterAndSortByDiscount(productList:Product[]):Product[]{
    return productList
}