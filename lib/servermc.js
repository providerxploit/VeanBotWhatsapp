const axios = require("axios");
const cheerio = require("cheerio");

function servermc() {
return new Promise((resolve, reject) => {
axios.get(`https://minecraftpocket-servers.com/country/indonesia/`).then( tod => {
const $ = cheerio.load(tod.data)
hasil = []
$("tr").each(function(c, d) {
ip = $(d).find("button.btn.btn-secondary.btn-sm").eq(1).text().trim().replace(':19132', '')
port = '19132'
versi = $(d).find("a.btn.btn-info.btn-sm").text()
player = $(d).find("td.d-none.d-md-table-cell > strong").eq(1).text().trim()
const Data = {
ip: ip,
port: port,
versi: versi,
player: player
}
hasil.push(Data)
})
resolve(hasil)
}).catch(reject)
})
}

module.exports = { servermc };