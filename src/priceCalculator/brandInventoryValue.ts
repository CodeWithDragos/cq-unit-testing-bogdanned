import { Brand, Product } from "../types";

export function brandInventoryValue(inventory:Product[], brand:Brand):number{

    if(inventory.length === 0) return 0;

    const brandProducts = inventory.filter((prod:Product) =>prod.brand.id === brand.id)
    
    return brandProducts.reduce((totalValue, prod) =>{
        return prod.net_price + totalValue
    }, 0)
}