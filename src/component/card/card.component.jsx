import Rate from "../rating/rating.component";
const Card = ({ productId, name, price, description, rate, imageUrl }) => {
  const currencyFormat = (num) => {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <div className="content" key={productId}>
      <img src={imageUrl} alt={imageUrl} />
      <h3>{name}</h3>
      <p>{description}</p>
      <h6>{currencyFormat(price)}</h6>
      <Rate count={parseInt(rate)} />
      <button className="buy-1">buy now</button>
    </div>
  );
};



export default Card;
