import React from "react";
import CollectionOverview from "../../components/collection-overview/Collection-Overview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/Collection";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/Firebase.Utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionMap);
      updateCollections(collectionMap);
    });
  }

  render() {
    const { match } = this.props;
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
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});
export default connect(null, mapDispatchToProps)(ShopPage);
