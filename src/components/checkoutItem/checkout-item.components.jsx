import "./checkout-item.style.scss";

import { useDispatch } from "react-redux";

import {
  clearCartItem,
  removeCartItem,
  addCartItem,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();

  const { name, quantity, price, imageUrl } = item;
  const clearCartItemHandler = () => {
    dispatch(clearCartItem(item));
  };
  const addCartItemHandler = () => {
    dispatch(addCartItem(item));
  };
  const removeCartItemHandler = () => {
    dispatch(removeCartItem(item));
  };

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeCartItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addCartItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearCartItemHandler}>
        &#10005;
      </div>
    </div>
  );
};
export default CheckoutItem;
