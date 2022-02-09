export enum ProductType{
    EDUCATION ="EDUCATION",
    FOOD="FOOD",
    REGULAR_GOODS="REGULAR_GOODS"
}

export type ProductDiscount = {
    isEnabled: boolean,
    percentage: number
}


export type Product = {
    id: string,
    name: string,
    net_price: number,
    type: ProductType,
    discount: ProductDiscount,
    brand: Brand,
}

export type Brand = {
    id: string,
    name: string,
}

export type CartItem = {
    product: Product,
    quantity: number
}

export type Cart = {
    items: CartItem[]
}

export type CartPrice = {
    net_price: number,
    gross_price: number,
    gross_price_discounted: number
}

export enum FilterProperty{
    NAME,
    BRAND,
    TYPE,
    DISCOUNT
}

export interface ProductFilter{
    property: FilterProperty,
    search?: string,
    value?: string | ProductType | boolean
}
