import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  wishList:[],
  usertoken:"",
}

export const ecommSlice = createSlice({
  name: 'ecomm',
  initialState,
  reducers: {
    incrementCart: (state,action) => {
      state.cartItems += 1
    },
    decrementCart: (state,action) => {
      state.cartItems -= 1
    },
    addToCart:(state,action)=>{
      let arr = state.cartItems
      arr.push(action.payload)
      console.log("Action",action)
      state.cartItems = arr
    },
    removeFromCart:(state,action)=>{
      state.cartItems = []
    },
    addToWishlist:(state,action)=>{
      let arr = state.wishList
      arr.push(action)
      state.wishList = arr
    },
    removeFromWishlist:(state,action)=>{
      state.wishList = []
    },
    setUser: (state, action) => { // action is payload
      state.usertoken += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementCart, decrementCart, addToCart, removeFromCart, addToWishlist,setUser, removeFromWishlist } = ecommSlice.actions

export default ecommSlice.reducer