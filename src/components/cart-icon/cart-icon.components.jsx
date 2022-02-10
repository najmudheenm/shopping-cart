import { useSelector } from "react-redux";
import "./shopping-bag.styles.scss";

//component importing
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

//redux importing
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const countItem = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  );

  //togle cart menu
  const toggleCartDropdown = () => {
    dispatch(toggleCartHidden());
  };

  return (
    <div className="cart-icon">
      <ShoppingIcon onClick={toggleCartDropdown} className="shopping-icon" />
      <span className="item-count">{countItem}</span>
    </div>
  );
};

export default CartIcon;
