import React from "react";
//redux
import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/cart/cart.action";

import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const Collection = ({ item }) => {
  const dispatch = useDispatch();
  const addCart = (item) => () => dispatch(addCartItem(item));

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price ">${item.price}</span>
      </div>
      <CustomButton onClick={addCart(item)} className="inverted">
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default Collection;
