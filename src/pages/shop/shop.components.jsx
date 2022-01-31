import React, { Component } from "react";

//data
import SHOP_DATA from "./shopData";

//components
import CollectionPreview from "../../components/preview-collection/preview-collection.component";

export class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    console.log(this.state);
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
