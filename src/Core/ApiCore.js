// import { API } from "../config.js";

// Get Products
export const getProducts = (sortBy) => {
    return fetch(`http://localhost:4000/api/products?sortBy=${sortBy}&order=desc&limit=8`, {
      method: "GET",
    })
      .then((data) => {
        return data.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };


  // Get Single Product
  export const getSingleProduct = (productId) => {
    return fetch(`http://localhost:4000/api/product/${productId}`, {
      method: "GET",
    })
      .then((data) => {
        return data.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

