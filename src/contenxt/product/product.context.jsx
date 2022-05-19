import { createContext, useState } from "react";

const SeedData = [
  {
    ProductId: "Asus123",
    Name: "ASus NoteBook",
    Price: 25000,
    Description:
      "Asus Tuf Gaming 15 10.Nesil Core i5 10300H-8Gb-512Gb Ssd-15.6-Gtx1650 4Gb-W11",
    Rating: "5",
    imageUrl:
      "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/132419-1_large.jpg",
  },
  {
    ProductId: "Acer123",
    Name: "Acer NoteBook",
    Price: 15000,
    Description:
      "Asus Tuf Gaming 15 10.Nesil Core i5 10300H-8Gb-512Gb Ssd-15.6-Gtx1650 4Gb-W11",
    Rating: "5",
    imageUrl:
      "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/asus/thumb/132419-1_large.jpg",
  },
];

export const ProductListContext = createContext({
  productList: SeedData,
});

export const ProductListProvider = ({ children }) => {
  const [productList, setProductList] = useState(SeedData);

  const value = { productList, setProductList };

  return (
    <ProductListContext.Provider value={value}>
      {children}
    </ProductListContext.Provider>
  );
};
