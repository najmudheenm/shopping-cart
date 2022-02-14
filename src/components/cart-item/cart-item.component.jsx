import "./cart-item.styles.scss";
import Img from "../img/Img";

const cartItem = ({ item }) => {
  const { imageUrl, price, name, quantity } = item;
  return (
    <div className="cart-item">
      <Img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default cartItem;
