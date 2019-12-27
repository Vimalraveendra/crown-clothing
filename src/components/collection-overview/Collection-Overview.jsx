import React from "react";
import "./Collection-Overview.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../../components/collection-preview/Collection-Preview";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...othercollections }) => {
        return (
          <CollectionPreview
            key={id}
            {...othercollections}
            // title={collection.title}
            // routeName={collection.routingName}
            // items={collection.items}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
