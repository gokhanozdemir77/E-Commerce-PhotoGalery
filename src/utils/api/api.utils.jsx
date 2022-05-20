export const REST_API_CALL_ACTIONS = {
  GET_PRODUCTS: "GET_PRODUCTS",
};

// const axios = require("axios").default;

export const ApiServiceManager = ({ type, param }) => {
  let result = null;
  switch (type) {
    case REST_API_CALL_ACTIONS.GET_PRODUCTS: {
      fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {
          result = data;
          return result;
        });
      console.log(result);
      return result;
    }

    default:
      return null;
  }
};
