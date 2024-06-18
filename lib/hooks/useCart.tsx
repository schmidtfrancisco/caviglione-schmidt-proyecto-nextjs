'use client';

import { createContext, useReducer, useContext, useEffect, useState } from "react";
import { Game } from "@/lib/definitions";
import { CartItem } from "@/lib/definitions";



export type CartAction = AddToCart | RemoveFromCart | ClearCart | UpdateQuantity;

type AddToCart = { type: "ADD_TO_CART"; game: Game; quantity?: number };
type RemoveFromCart = { type: "REMOVE_FROM_CART"; id: string };
type UpdateQuantity = { type: "UPDATE_QUANTITY"; id: string; quantity: number };
type ClearCart = { type: "CLEAR_CART" };

interface CartState {
  items: CartItem[];
};

const CartContext = createContext<{
  cart: CartState;
  dispatch: React.Dispatch<CartAction>;
  cartTotal: number;
  cartCount: number;
  isCartConfirmed: boolean;
  setIsCartConfirmed: React.Dispatch<React.SetStateAction<boolean>>
} | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItemIndex = state.items.findIndex((item) => item.game.id === action.game.id);
      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        const updatedexistingItem = {
          ...existingItem,
          quantity: existingItem.quantity + (action.quantity || 1),
        }
        const updatedItems = [
          ...state.items.slice(0, existingItemIndex),
          updatedexistingItem,
          ...state.items.slice(existingItemIndex + 1),
        ];

        return {
          ...state,
          items: updatedItems,
        };

      }else{
        return {
          ...state,
          items: [...state.items, { game: action.game, quantity: action.quantity || 1 }],
        };
      }
    }

    case "UPDATE_QUANTITY": {
      const existingItemIndex = state.items.findIndex((item) => item.game.id === action.id);
      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        const updatedexistingItem = {
          ...existingItem,
          quantity: action.quantity,
        }
        const updatedItems = [
          ...state.items.slice(0, existingItemIndex),
          updatedexistingItem,
          ...state.items.slice(existingItemIndex + 1),
        ];
        return {
          ...state,
          items: updatedItems,
        };
      }
      return state;
    }

    case "REMOVE_FROM_CART": {
      return {
        ...state,
        items: state.items.filter((item) => item.game.id !== action.id),
      };
    }

    case "CLEAR_CART": {
      return {
        ...state,
        items: [],
      };
    }
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
  }, createInitialState);
  const [isCartConfirmed, setIsCartConfirmed] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const cartTotal = cart.items.reduce((total, item) => total + item.game.price * item.quantity, 0);
  const cartCount = cart.items.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{cart, dispatch, cartTotal, cartCount, isCartConfirmed, setIsCartConfirmed } }>
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



