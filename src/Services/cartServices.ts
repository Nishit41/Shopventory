export const getAllCarts = async() => {
  try {
    const response = await fetch(`https://fakestoreapi.com/carts`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}