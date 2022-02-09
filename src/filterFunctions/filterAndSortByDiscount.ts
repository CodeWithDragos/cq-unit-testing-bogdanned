import { Product } from "../types";

/**
 * Filters a list of products and returns products with discount only.
 * The results is sorted, ascending:from lowest to higher net discount value.
 * The net discount value for a product is calculated with the following formula:
 * net_discount = net_price * (100 - discount.percentage) / 100
 * @param {Product[]} productList
 * @returns {Product[]} the list of filtered products
 */

const calculateNetDiscount = (prod:Product) => prod.net_price * (100 - prod.discount.percentage) / 100

export default function filterAndSortByDiscount(productList:Product[]):Product[]{
    
    let filteredProductList:Product[] = []

    if(productList.length == 0) return filteredProductList

    filteredProductList = productList.filter((prod:Product)=>{
        return prod.discount.isEnabled
    })

    const sortedProductList:Product[] = filteredProductList.sort((first:Product,second:Product) => {
        return calculateNetDiscount(first) - calculateNetDiscount(second)
    })
    
    return sortedProductList
}