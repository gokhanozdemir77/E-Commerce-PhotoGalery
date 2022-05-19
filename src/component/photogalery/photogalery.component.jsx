import { useContext } from "react";
import { ProductListContext } from "../../contenxt/product/product.context";
import Rating from "../rating/rating.component";
import "./photogalery.style.scss";

const PhotoGalery = () => {
  const { productList } = useContext(ProductListContext);
  const currencyFormat = (num) => {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <div className="gallery">
      {productList.map((product) => (
        <div className="content" key={product.ProductId}>
          <img src={product.imageUrl} />
          <h3>{product.Name}</h3>
          <p>{product.Description}</p>
          <h6>{currencyFormat(product.Price)}</h6>
          <Rating count={product.Rating} />
          <button className="buy-1">Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default PhotoGalery;
