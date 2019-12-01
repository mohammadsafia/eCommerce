import React, { Component } from "react";
import Shop_Data from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview";
class shopPage extends Component {
  state = {
    collections: Shop_Data
  };
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...reset }) => (
          <CollectionPreview key={id} {...reset} />
        ))}
      </div>
    );
  }
}

export default shopPage;
