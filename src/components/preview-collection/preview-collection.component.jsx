import React from "react";
import "./collection-preview.style.scss";
import CollectionItem from "../collection-item/collection-item.components";
const CollectionPreview = ({ title, items, numberOfShow = 4 }) => {
  console.log(title, items);
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, inx) => {
            return inx < numberOfShow;
          })
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
