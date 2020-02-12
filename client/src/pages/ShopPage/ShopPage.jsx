import React, { useEffect } from "react";
import CollectionOverviewContainer from "../../components/collection-overview/Collection-Overview.container";
import { Route } from "react-router-dom";
import CollectionContainer from "../collection/Collection.container";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import { isCollectionLoaded } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  // componentDidMount() {
  //   const { fetchCollectionsStart } = this.props;
  //   fetchCollectionsStart();
  // }

  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionLoaded: isCollectionLoaded
});
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
