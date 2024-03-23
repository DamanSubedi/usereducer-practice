import { createContext } from "react";
import { cartReducer, initialState } from "./cartReducer";
import { useReducer } from "react";




export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
    console.log(cartReducer)
    return (
        <>
            <CartContext.Provider value={"hello"}>
                {children}
            </CartContext.Provider>
        </>
    )
}


export const CartConsumer = CartContext.Consumer