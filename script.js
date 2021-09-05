const XIVAPI = require('@xivapi/js')
require('dotenv').config()
const xiv = new XIVAPI({
    private_key: process.env.PRIVATE_KEY
})

const getId = async() => {
    let res = await xiv.search('Slithersand')

    console.log(res)
}

getId()