import { Cart, CartItem, CartPrice } from "../types";
import calculateCartItemPrice from "./calculateCartItemPrice";


export default function calculateCartTotalPrice(cart: Cart): CartPrice {
  if (cart.items.length === 0)
    return {
      net_price: 0,
      gross_price: 0,
      gross_price_discounted: 0,
    };
  const totalPrice: CartPrice = cart.items.reduce(
    (totalPrice:CartPrice, cartItem:CartItem) => {
        const itemPrice = calculateCartItemPrice(cartItem)

        return {
          net_price: itemPrice.net_price + totalPrice.net_price,
          gross_price: itemPrice.gross_price + totalPrice.gross_price,
          gross_price_discounted: itemPrice.gross_price_discounted + totalPrice.gross_price_discounted
        }
    },
    {
      net_price: 0,
      gross_price: 0,
      gross_price_discounted: 0,
    }
  );
  return totalPrice;
}
