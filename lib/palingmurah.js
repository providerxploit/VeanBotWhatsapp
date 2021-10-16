const axios = require("axios");
const cheerio = require("cheerio");

function palingmurah(query) {
return new Promise((resolve, reject) => {
axios.get(`https://palingmurah.net/pencarian-produk/?term=${query}`).then(async tod => {
const $ = cheerio.load(tod.data)
hasil = []
$("div.ui.card.wpj-card-style-2").each(function(c, d) {
name = $(d).find("div.content.wpj-small.list-70-right > a.list-header").text().trim();
link = $(d).find("div.content.wpj-small.list-70-right > a.list-header").attr('href');
img = $(d).find("div.card-image-helper > img").attr('data-src');
harga = $(d).find("div.flex-master.card-job-price.text-right.text-vertical-center").text().trim();
usernamepenjual = $(d).find("strong").text().trim();
linkpenjual = $(d).find("a.ui.wpj-big.avatar.image").attr('href');
iconpenjual = $(d).find("a.ui.wpj-big.avatar.image > img").attr('data-src');
const Data = {
name: name,
harga: harga,
img: img,
link: link,
usernamepenjual: usernamepenjual,
linkpenjual: linkpenjual,
iconpenjual: iconpenjual
}
hasil.push(Data)
})
resolve(hasil)
}).catch(reject)
});
}

module.exports = { palingmurah };