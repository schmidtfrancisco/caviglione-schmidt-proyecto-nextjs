'use client';

import { createContext, useReducer, useContext, useEffect } from "react";
import { Game } from "@/lib/definitions";

export type CartItem = {
  game: Game;
};

export type CartAction = AddToCart | RemoveFromCart | ClearCart;

type AddToCart = { type: "ADD_TO_CART"; game: Game };
type RemoveFromCart = { type: "REMOVE_FROM_CART"; id: string };
type ClearCart = { type: "CLEAR_CART" };

interface CartState {
  items: CartItem[];
  cartCount: number;
  cartTotal: number;
};

const CartContext = createContext<{
  cart: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [...state.items, { game: action.game }],
        cartCount: state.cartCount + 1,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.game.id !== action.id),
        cartCount: state.cartCount - 1,
      };
    case "CLEAR_CART":
      return {
        ...state,
        items: [],
        cartCount: 0,
      };
    default:
      return state;
  }
};

function createInitialState(emptyCart: CartState) {
  if (typeof window !== 'undefined') {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      return JSON.parse(storedCart);
    }
  }
  return emptyCart
 
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    items: [],
    cartCount: 0,
    cartTotal: 0,
  }, createInitialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{cart, dispatch }}>
      {children}
    </CartContext.Provider>     
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};



