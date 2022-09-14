import { useState } from "react";
import {createContext} from "react";


export const CartContext = createContext()

export const CartProvider = () => {

    const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const isInCart = (id) => {
  return cart.some((item) => item.id === id)
}

const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartQuantity
          } }>



        </CartContext.Provider>
    )
}