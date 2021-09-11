const XIVAPI = require('@xivapi/js');
require('dotenv').config();

const xiv = new XIVAPI({
  private_key: process.env.PRIVATE_KEY,
});

const API = {
  recipe(id) {
    xiv.data.get('Recipe', id).then(
      (res) => res
      // console.log(`Name`, res.Name)
      // console.log(`Type`, res.ItemSearchCategory.Name)
    );
  },

  items(id) {
    xiv.data.get('item', id).then((res) => {
      //   const recipeId = res.Recipes[0].ID;
      const recipeId = res;
      console.log(recipeId);
      // console.log(`Name`, res.Name)
      // console.log(`Type`, res.ItemSearchCategory.Name)
    });
  },

  itemInfo(item) {
    return xiv.search(item).catch((err) => {
      console.log(err);
    });
  },
};

module.exports = API;
