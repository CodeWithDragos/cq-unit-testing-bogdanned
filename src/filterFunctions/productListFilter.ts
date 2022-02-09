import { FilterProperty, Product, ProductFilter } from "../types";

export default function productListFilter(productList:Product[], filterList: ProductFilter[]):Product[]{
    let filteredProductList:Product[] = productList;

    if(filterList.length === 0 || productList.length === 0) return []

    for(let i = 0; i < filterList.length; i++){
        const filter = filterList[i]

        switch (filter.property) {
            case FilterProperty.NAME:
                filteredProductList = filteredProductList.filter((product) => product.name.includes(filter.search))
                break;
            case FilterProperty.BRAND:
                filteredProductList = filteredProductList.filter((product) => product.brand.name.includes(filter.search))
                break;
            case FilterProperty.TYPE:
                filteredProductList = filteredProductList.filter(prod => prod.type === filter.value)
                break;
            case FilterProperty.DISCOUNT:
                filteredProductList = filteredProductList.filter(prod => prod.discount.isEnabled === filter.value)
                break;
        }
    }


    return filteredProductList
}