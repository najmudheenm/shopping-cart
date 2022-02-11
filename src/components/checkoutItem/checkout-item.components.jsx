import "./checkout-item.style.scss";

import { useDispatch } from "react-redux";

import { removeCartItem } from "../../redux/cart/cart.action";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();

  const { name, quantity, price, imageUrl } = item;
  const removeItemHandler = () => {
    dispatch(removeCartItem(item));
  };
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeItemHandler}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
