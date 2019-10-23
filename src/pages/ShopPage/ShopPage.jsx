import React from "react";
import ShopData from "./ShopData";
import CollectionPreview from "../../components/collection-preview/Collection-Preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData
    };
  }
  render() {
    const { collections } = this.state;
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
  }
}

export default ShopPage;
