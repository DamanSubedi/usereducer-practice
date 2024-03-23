let data = [];
for (let i = 1; i < 26; i++) {
  data = [...data, { id: i, item: i, inCart: false, count: 0 }]
}

export const initialState = {
  products: data,
  cartProducts: [],
  // cartCount: 0,
  // cartTotal : 0,
}


export const cartReducer = (state, action) => {
    switch (action.type) {
  
      case "ADD_TO_CART":
        let newItem = state.products.find(item => item.id === action.payload.id)
        if (!newItem.inCart) {
          newItem.inCart = true
          newItem.count = 1
        } else {
          newItem.count += 1
        }
        return { ...state, cartProducts: [...state.products.filter(item => item.inCart === true)] }
  
  
      case "REMOVE_ITEM":
        let selectedItem = state.cartProducts.find((item) => item.id === action.payload.id)
        selectedItem.inCart = false
  
        let newCartItems = state.cartProducts.filter(item => item.id !== action.payload.id)
  
  
        return { ...state, cartProducts: newCartItems }
  
  
      case "CLEAR_CART":
        return { ...state, cartProducts: [] }
      default:
        throw new Error(`unknown action type ${action.type}`)
    }
  
  }
  