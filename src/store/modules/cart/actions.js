export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function incrementQuantity(id) {
  return {
    type: '@cart/INCREMENT',
    id,
  };
}

export function decrementQuantity(id) {
  return {
    type: '@cart/DECREMENT',
    id,
  };
}
