const XIVAPI = require('@xivapi/js');
require('dotenv').config();

const xiv = new XIVAPI({
  private_key: process.env.PRIVATE_KEY,
});

const API = {
  recipe(id) {
    return xiv.data.get('Recipe', id).catch((err) => console.log(`err`, err));
  },

  items(id) {
    return xiv.data.get('item', id).catch((err) => console.log(err));
  },

  itemInfo(item) {
    return xiv.search(item).catch((err) => console.log(err));
  },
};

module.exports = API;
