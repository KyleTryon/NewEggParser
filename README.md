# Unofficial Newegg "API"

A very basic personal project to fetch basic information about an item from NewEgg.com so that it can be used to create more rich media embeds in applications such as Discord.

## Installation

Install NPM Module

`const newegg = require('neweggparser')`

## Usage
For reasons, rather than inputting the URL directly, enter the item id which can be found in the URL and the website TLD for the requested country.
```
newegg.getItem('ITEM ID','com')
    .then( item => {
        console.log(item)
    })
```

The result will return an item like so:

```
{ title: 'Product Title',
  img: 'Product Image',
  price: 'Product Price',
  currency: 'Country Code' }
```