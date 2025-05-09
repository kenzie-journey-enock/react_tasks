export function addToCart(product) {
  const storage = localStorage.getItem("cart");
  const cart = storage ? JSON.parse(storage) : [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));
  return cart;
}
