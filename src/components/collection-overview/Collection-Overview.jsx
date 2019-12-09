import React from "react";
import "./Collection-Overview.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selector";
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
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionOverview);
