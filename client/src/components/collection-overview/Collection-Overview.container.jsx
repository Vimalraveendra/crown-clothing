import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/WithSpinner";
import CollectionOverview from "../../components/collection-overview/Collection-Overview";
import { compose } from "redux";

const mapStateToProp = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProp),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
