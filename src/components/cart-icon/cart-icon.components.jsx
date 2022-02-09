import "./shopping-bag.styles.scss";

//component importing
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

//redux importing
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import CartDropdown from "../cart-dropdown/cart-dropdown.components";
const CartIcon = () => {
  const dispatch = useDispatch();
  //togle cart menu
  const toggleCartDropdown = () => {
    dispatch(toggleCartHidden());
  };
  return (
    <div className="cart-icon">
      <ShoppingIcon onClick={toggleCartDropdown} className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
