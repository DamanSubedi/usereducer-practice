// import logo from './logo.svg';
import { personList } from "./PersonList"
import { useContext, useReducer } from "react"
import { cartReducer } from "./cartReducer";
import { initialState } from "./cartReducer";
import './index.css';
import { CartContext } from "./CartContext";










const App = () => {

  const value = useContext(CartContext)
  const [state, dispatch] = useReducer(cartReducer, initialState)
  let cartCount = state.cartProducts.reduce((total, current) => {
    //   total += current.count
    //   return total
  }, 0)





  return (<>
    <div className="product_container">
      {state.products.map((product) => {
        return (
          <article key={product.id} className="product"
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: { id: product.id, inCart: product.inCart } })
            }}
          >
            {product.item}
          </article>
        )
      })}
    </div>

    <div className="cart">
      <h3>cart</h3>
      <p>cart items : {cartCount}</p>
      {state.cartProducts.map(item => {
        const { id } = item
        return (
          <article className="cart_item" key={item.id}>
            <h3>{item.item}</h3>
            <p> count {item.count}</p>
            <button
              onClick={() => {
                dispatch({ type: "REMOVE_ITEM", payload: { id } })
              }}
            >
              remove
            </button>
          </article>

        )
      })}
      <button onClick={() => {
        dispatch({ type: "CLEAR_CART" })
      }}>
        clear cart
      </button>
    </div>

  </>
  )
}

export default App;
