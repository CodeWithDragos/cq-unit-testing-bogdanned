export default function calculatePriceAfterDiscount(price: number, discount: number):number{
 return price * (100 - discount) / 100
}