import { createContext, useState } from "react";
import {
  ApiServiceManager,
  REST_API_CALL_ACTIONS,
} from "../../utils/api/api.utils";

const SeedData = [
  {
    productId: "Asus123",
    name: "Asus NoteBook",
    price: 25000,
    description:
      "Asus Tuf Gaming 15 10.Nesil Core i5 10300H-8Gb-512Gb Ssd-15.6-Gtx1650 4Gb-W11",
    rate: "5",
    imageUrl:
      "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/132419-1_large.jpg",
  },
  {
    productId: "Acer123",
    name: "Acer NoteBook",
    price: 15000,
    description:
      "Asus Tuf Gaming 15 10.Nesil Core i5 10300H-8Gb-512Gb Ssd-15.6-Gtx1650 4Gb-W11",
    rate: "4",
    imageUrl:
      "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/132419-1_large.jpg",
  },
];

export const ProductListContext = createContext({
  productList: SeedData,
});

export const ProductListProvider = ({ children }) => {
  var x = ApiServiceManager({
    type: REST_API_CALL_ACTIONS.GET_PRODUCTS,
    param: "dfg",
  });

  // console.log(x);

  const [productList, setProductList] = useState(SeedData);

  const value = { productList, setProductList };

  return (
    <ProductListContext.Provider value={value}>
      {children}
    </ProductListContext.Provider>
  );
};
