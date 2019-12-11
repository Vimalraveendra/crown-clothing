import React from "react";
import "./Collection.scss";
import CollectionItems from "../../components/collection-items/Collection-Items";

const CollectionPage = ({ match }) => {
  return (
    <div className="collection-page">
      <h2>{match.params.collectionId}</h2>
    </div>
  );
};

export default CollectionPage;
