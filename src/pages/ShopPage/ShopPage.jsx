import React from "react";
import CollectionOverview from "../../components/collection-overview/Collection-Overview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/Collection";

const ShopPage = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};
export default ShopPage;
