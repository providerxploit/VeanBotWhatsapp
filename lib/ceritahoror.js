const axios = require("axios");
const cheerio = require("cheerio");

const ch = async() => {
        return new Promise((resolve,reject) => {
                axios.get('https://creepyfiles.com/anak-yang-berantakan/')
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const judul = $('header > h1').text();
                        const desc = $('header > div > span').text(); + $('header > div > span > span').text(); + $('header > div > span > time').text();
                        const cerita = $('div.entry-content').text();
                        const result = judul + '\n' + desc + '\n\n' + cerita
                  resolve(result)
                })
                .catch(reject)
        })
}

module.exports = { ch };