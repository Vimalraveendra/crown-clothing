import React from "react";
import CollectionPreview from "../../components/collection-preview/Collection-Preview";
import { selectCollections } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const ShopPage = ({ collections }) => {
  return (
    <div>
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
export default connect(mapStateToProps)(ShopPage);
