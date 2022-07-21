import { CartItem, CartPrice } from "../types";
import calculateGrossPrice from "./calculateGrossPrice";
import calculatePriceAfterDiscount from "./calculatePriceAfterDiscount";

export default function calculateCartItemPrice(item: CartItem): CartPrice {
  const gross_price = calculateGrossPrice(item.product);
  if (item.product.discount.isEnabled) {
    const gross_price_discounted = calculatePriceAfterDiscount(
      gross_price,
      item.product.discount.percentage
    );
    return {
      net_price: item.product.net_price * item.quantity,
      gross_price: gross_price * item.quantity,
      gross_price_discounted: gross_price_discounted * item.quantity,
    };
  } else {
    return {
      net_price: item.product.net_price * item.quantity,
      gross_price: gross_price * item.quantity,
      gross_price_discounted: gross_price * item.quantity,
    };
  }
}
