const axios = require("axios");
const cheerio = require("cheerio");

function jalantikus(query) {
return new Promise((resolve, reject) => {
axios.get(`https://jalantikus.com/search/articles/${query}/`).then( tod => {
const $ = cheerio.load(tod.data)
hasil = []
$("div.post-block-with-category").each(function(c, d) {
title = $(d).find("a.post-block-with-category__link").text()
category = $(d).find("a.post-info__category-link").text()
date = $(d).find("time").text()
link = `https://jalantikus.com${$(d).find("a").attr('href')}`
const Data = {
title: title,
category: category,
date: date,
link: link
}
hasil.push(Data)
})
resolve(hasil)
}).catch(reject)
})
}

module.exports = { jalantikus };