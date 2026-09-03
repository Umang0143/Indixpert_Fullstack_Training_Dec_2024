import axios from "axios";

// Create an axios instance that will be used for all api
const api = axios.create({
        baseURL: "https://dummyjson.com",
});

// Method/API Fatch Products
export const fatchProducts =  async() => {
    const response =await api.get('/products');
    return response;
};

// Method/API Fetch Categories
export const fetchCategories = async () => {
  const response = await api.get("/products/categories");
  return response;
};
