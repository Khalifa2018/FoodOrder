import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateCartItemQuantity: () => {},
});

function mealCartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const { id, name, price } = action.payload;

    const existingCartIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === id
    );

    const existingCartMeal = updatedItems[existingCartIndex];
    if (existingCartMeal) {
      const updateMeal = {
        ...existingCartMeal,
        quantity: existingCartMeal.quantity + 1,
      };
      updatedItems[existingCartIndex] = updateMeal;
    } else {
      updatedItems.push({
        id,
        name,
        price,
        quantity: 1,
      });
    }

    return {
      ...state,
      items: updatedItems,
    };
  } else if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.mealId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  return state;
}

export default function CartContextProvider({ children }) {
  const [mealCartState, mealCartDispatch] = useReducer(mealCartReducer, {
    items: [],
  });

  function handleAddItemToCart(id) {
    mealCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(mealId, amount) {
    mealCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        mealId,
        amount,
      },
    });
  }

  const ctxValue = {
    items: mealCartState.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
