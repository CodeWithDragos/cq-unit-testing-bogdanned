import { Product, ProductType } from "../types";

export default (prod:Product):number =>{
    if(prod.type === ProductType.EDUCATION){
        return 1.1 * prod.net_price;
    }else if(prod.type === ProductType.FOOD){
        return 1.07 * prod.net_price;
    }else{
        return 1.19 * prod.net_price;
    }
}