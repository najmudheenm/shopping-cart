import "./cart-dropdown.style.scss";
import { useNavigate } from "react-router-dom";

//import redux
import { useSelector } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => navigate("/checkout")}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
