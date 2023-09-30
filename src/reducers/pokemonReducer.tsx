/* eslint-disable @typescript-eslint/no-explicit-any */

const initialState: any[] = [];
export function pokemonReducer(
  state = initialState,
  action: { type?: string; payload?: any }
) {
  if (action.type === "ADD") {
    const existingProductIndex = state.findIndex(
      (product) => product.id === action.payload.id
    );

    if (existingProductIndex !== -1) {
      // If the product with the same "id" exists, update its count
      state[existingProductIndex].count += action.payload.count;
      return [...state]; // Return a new array to trigger a state update
    } else {
      // If the product doesn't exist, add it to the cart
      return [...state, action.payload];
    }
  }
  if (action.type === "DECREMENT") {
    const existingProductIndex = state.findIndex(
      (product) => product.id === action.payload.id
    );

    if (existingProductIndex !== -1) {
      // If the product with the same "id" exists, update its count
      const updatedState = [...state];
      updatedState[existingProductIndex] = {
        ...updatedState[existingProductIndex],
        count: updatedState[existingProductIndex].count - 1,
      };

      // Check if the count becomes 0, and if so, remove the item
      if (updatedState[existingProductIndex].count === 0) {
        updatedState.splice(existingProductIndex, 1); // Remove the item from the array
      }

      return updatedState; // Return a new array with the count decremented or item removed
    } else {
      // If the product doesn't exist, add it to the cart

      return [...state, action.payload];
    }
  }
  if (action.type === "INCREMENT") {
    const existingProductIndex = state.findIndex(
      (product) => product.id === action.payload.id
    );

    if (existingProductIndex !== -1) {
      // If the product with the same "id" exists, update its count
      const updatedState = [...state];
      updatedState[existingProductIndex] = {
        ...updatedState[existingProductIndex],
        count: updatedState[existingProductIndex].count + 1,
      };
      return updatedState; // Return a new array with the count incremented
    } else {
      // If the product doesn't exist, add it to the cart
      return [...state, action.payload];
    }
  }
  if (action.type === "CLEAR") {
    // console.log("payload", action.payload);
    return [];
  }
  return state;
}
