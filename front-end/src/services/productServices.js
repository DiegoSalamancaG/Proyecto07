import axios from "axios";

const URL_BASE = "https://fakestoreapi.com";

const apiProducts = axios.create({
  baseURL: URL_BASE,
});

export const getProducts = async () => {
  try {
    const { data } = await apiProducts.get("/products");
    return data;
  } catch (error) {
    return error.data;
  }
};
