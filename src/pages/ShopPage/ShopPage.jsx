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
import WithSpinner from "../../components/with-spinner/WithSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionMap);
      updateCollections(collectionMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});
export default connect(null, mapDispatchToProps)(ShopPage);
