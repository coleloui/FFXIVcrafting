const XIVAPI = require('@xivapi/js')
require('dotenv').config()
const xiv = new XIVAPI({
    private_key: process.env.PRIVATE_KEY
})

let itemID

const itemInfo = () => {
        xiv.search('Rarefied Lemonade').then((res) => {
            itemID = res.Results[0].ID
            items(itemID)
        }).catch((err) =>{
            console.log(err)
        })
    }
    const items = (id) => {
        xiv.data.get('item', id).then((res) => {
            const recipeId = res.Recipes[0].ID
            recipe(recipeId)
            // console.log(`Name`, res.Name)
            // console.log(`Type`, res.ItemSearchCategory.Name)
        })
    }

    const recipe = (id) => {
        xiv.data.get('Recipe', id).then((res) => {
            console.log(res)
            // console.log(`Name`, res.Name)
            // console.log(`Type`, res.ItemSearchCategory.Name)
        })
    }

itemInfo()