const axios = require('axios')
const cheerio = require('cheerio')

const wikiv2 = async (query) => {
const res = await axios.get(`https://id.m.wikipedia.org/wiki/${query}`)
const $ = cheerio.load(res.data)
const hasil = []
let poto = $('div.mw-parser-output > section#mf-section-0.mf-section-0 > table.infobox.vcard > tbody > tr > td.infobox-image > a.image >').attr('src')
link_poto = 'https:'+poto
let judul = $('h1#section_0').text()
let isinye = $('p').text()
hasil.push({ link_poto,  judul , isinye})
return hasil
}

module.exports = { wikiv2 }