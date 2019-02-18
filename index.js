const cheerio = require('cheerio')
const fetch = require('node-fetch')

function getItem(itemID, tld) {
    const url = `http://www.newegg.${tld}/Product/Product.aspx?Item=${itemID}`
    console.log('Fetching: ', url)

    return new Promise( (resolve, reject) => {
        fetch(url)
            .then( res => res.text())
            .then( body => {
                const $ = cheerio.load(body)
                let product = {}
                product.title = $('h1#grpDescrip_h > span').text().trim()
                product.img = $('meta[property="og:image"]').attr('content')
                product.price = $('meta[itemprop="price"]').attr('content')
                product.currency = $('meta[itemprop="priceCurrency"]').attr('content')
                resolve(product)
            })
    })  
}

module.exports = {getItem}



