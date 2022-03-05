import React from "react";
import background from "./backround2.jpg";
import "./Home.css";
import img1 from './imgs/item1.jpg'
import img2 from './imgs/item2.jpg'
import img3 from './imgs/item3.jpg'

import { CartProvider, useCart } from "react-use-cart";

function Page() {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      img: img1,
      name: "גוף חימום",
      price: 299,
      quantity: 1
    },
    {
      id: 2,
      img: img2,
      name: "פילטר",
      price: 165,
      quantity: 5
    },
    {
      id: 3,
      img: img3,
      name: "מסגרת",
      price: 450,
      quantity: 1
    },
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <button onClick={() => addItem(p)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>

      <ul>
        {items.map((item) => (
          <li key={item.id}><img src={item.img}></img>
            {item.quantity} x {item.name} &mdash;
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
}

function Products() {
  return (
    <CartProvider>
      <Page />
      <Cart />
    </CartProvider>
  );
  }

export default Products;