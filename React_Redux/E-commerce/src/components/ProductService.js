import { fatchProducts } from "../api/Services";

export const fetchProducts = async (limit = 12, skip = 0) => {
  const res = await fetch(`${fatchProducts}?limit=${limit}&skip=${skip}`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
};