const XIVAPI = require('@xivapi/js')
require('dotenv').config()
const xiv = new XIVAPI({
    private_key: process.env.PRIVATE_KEY
})

let itemID

const itemInfo = () => {
        xiv.search('Slithersand').then((res) => {
            itemID = res.Results[0].ID
            items(itemID)
        }).catch((err) =>{
            console.log(err)
        })
    }
const items = (id) => {
    xiv.data.get('item', id).then((res) => {
        console.log(`Name`, res.Name)
        console.log(`Type`, res.ItemSearchCategory.Name)
    })
}

itemInfo()