import React from "react";
import CollectionOverview from "../../components/collection-overview/Collection-Overview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/Collection";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/Firebase.Utils";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      convertCollectionsSnapshotToMap(snapshot);
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
export default ShopPage;
