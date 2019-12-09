import SHOP_DATA from "./ShopData";

const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_STATE, action = {}) => {
  console.log("state", state);
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
