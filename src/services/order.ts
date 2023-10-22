import ItemModel from "../models/items";

const getOrders= async () => {
    const responseItem = await ItemModel.find({});
    return responseItem;
  };

  export { getOrders }