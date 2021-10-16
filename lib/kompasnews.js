const axios = require("axios");
const cheerio = require("cheerio");

function kompasnews() {
return new Promise((resolve, reject) => {
axios.get(`https://news.kompas.com/`).then( tod => {
const $ = cheerio.load(tod.data)
hasil = []
$("div.col-bs9-3").each(function(c, d) {
title = $(d).find("h3.article__title > a.article__link").text()
desc = $(d).find("div.article__lead").text().trim()
date = $(d).find("div.article__date").text().trim()
link = $(d).find("h3.article__title > a.article__link").attr('href')
const Data = {
title: title,
desc: desc,
date: date,
link: link
}
hasil.push(Data)
})
resolve(hasil)
}).catch(reject)
})
}

module.exports = { kompasnews };