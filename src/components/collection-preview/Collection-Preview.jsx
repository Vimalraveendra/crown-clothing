import React from "react";
import "./Collection-Preview.scss";
import CollectionItem from "../collection-items/Collection-Items";

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItems }) => {
            return <CollectionItem key={id} {...otherItems} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
