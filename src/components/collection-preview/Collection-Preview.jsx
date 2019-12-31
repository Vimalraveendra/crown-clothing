import React from "react";
// import "./Collection-Preview.scss";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from "./CollectionPreview.styles";
import CollectionItem from "../collection-items/Collection-Items";

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map(item => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
