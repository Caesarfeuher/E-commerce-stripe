// "use client";

// import { Button } from "@/components/ui/button";
// import { useShoppingCart } from "use-shopping-cart";
// import { urlFor } from "../app/lib/sanity";
// import { ProductCart } from "./AddToBag";

// export default function CheckoutNow({
//   currency,
//   description,
//   image,
//   name,
//   price,
//   price_id,
// }: ProductCart) {
//   const { checkoutSingleItem } = useShoppingCart();

//   function buyNow(priceId: string) {
//     checkoutSingleItem(priceId);
//   }

//   const product = {
//     name: name,
//     description: description,
//     price: price,
//     currency: currency,
//     image: urlFor(image).url(),
//     price_id: price_id,
//   };
//   return (
//     <Button
//       variant="outline"
//       onClick={() => {
//         buyNow(product.price_id);
//       }}
//     >
//       Checkout Now
//     </Button>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../app/lib/sanity";
import { ProductCart } from "./AddToBag";

export default function CheckoutNow({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();

  function buyNow(priceId: string) {
    checkoutSingleItem(priceId);
  }

  const product = {
    name,
    description,
    price,
    currency,
    image: urlFor(image).url(),
    price_id: price_id || '', // Ensure price_id is always a string
  };

  return (
    <Button
      variant="outline"
      onClick={() => {
        if (product.price_id) {
          buyNow(product.price_id);
        } else {
          console.error("Price ID is null or undefined");
        }
      }}
    >
      Checkout Now
    </Button>
  );
}


