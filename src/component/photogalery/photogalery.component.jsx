import { useContext } from "react";
import { ProductListContext } from "../../contenxt/product/product.context";
import Card from "../card/card.component";

import "./photogalery.style.scss";

const PhotoGalery = () => {
  const { productList } = useContext(ProductListContext);

  return (
    <div className="gallery">
      {productList.map((product) => (
        <Card key={product.productId} {...product} />
      ))}
    </div>
  );
};

export default PhotoGalery;
