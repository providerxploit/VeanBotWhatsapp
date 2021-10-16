const cheerio = require('cheerio')
const axios = require('axios')

async function komikuu() {
    return new Promise((resolve, reject) => {
      axios.request(`https://data3.komiku.id/pustaka/`, {
            method: "GET",
            data: null,
            headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                "cache-control": "max-age=0",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'
            }
        }).then(respon => {
            const $ = cheerio.load(respon.data)
            let hasil = []
            $('.daftar').each(function (a, b) {
                $(b).find('.bge').each(function (BIT, CH) {
                    let url = $(CH).find('div.bgei > a').attr('href')
                    let title = $(CH).find('div.kan > a > h3').text().trim()
                    let info = $(CH).find('div.kan > span.judul2').text().trim()
                    let desc = $(CH).find('div.kan > p').text().trim()
                    let thumb = $(CH).find('div.bgei > a > img').attr('src')
                    const result = {
                        title: title,
                        info: info,
                        thumb: thumb,
                        url: url,
                        desc: desc
                    }
                     hasil.push(result)
                })
            })
            resolve(hasil)
        })
    })
}

module.exports = { komikuu }