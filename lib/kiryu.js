const axios = require("axios");
const cheerio = require("cheerio");

function kiryu(q) {
    return new Promise((resolve, reject)=> {
        axios(`https://kiryuu.id/?s=${q}`, {
        method: "GET",
        cookie: '_ga=GA1.1.785595671.1630245632; HstCfa4535336=1630245632670; HstCmu4535336=1630245632670; HstCnv4535336=1; HstCns4535336=1; c_ref_4535336=https://kiryuu.co/; __viCookieActive=true; _pbjs_userid_consent_data=3524755945110770; _ga_62TWKN8BP6=GS1.1.1630245631.1.1.1630245838.0; HstCla4535336=1630245838784; HstPn4535336=5; HstPt4535336=5; cto_bidid=q4a1ml93MjJaZGJwcFZHb3FScjFYbUJHb0JaUEJLdjJ0S2gzWjBIMXp5OXlrTk9qYkhHNDRZS0tIcjZhc0dOam8xNVdHTEVkWGMwVlAySzRzMTB2bTM4YUs5b3g5NHJFYTVMVGpDbmpNRDZlYVZSUSUzRA; cto_bundle=FQXTu19ZV21UblBkVWxrblRHZTR5cmkzJTJCV054OXVKWE5rM05EQTVDcUtIeVhCeFR1U1dobWJWdHp5d2hFeG4lMkJFRlc5dWF3SFRyckhMMEZWMERDbGdTSnJmdSUyQjJFTkZqazU1N29zYlJlRVVaREdDSW1WJTJGRHZLWUdFQnpSbXd6OVdzJTJGZWFsUFlRRkJ3RlFMWWFaVTh4RUNSNHF3JTNEJTNE',
        }).then(({data}) => {
        let thumbnail = []
        const $ = cheerio.load(data)
        for (let ab = 1; ab < 10; ab++) {
        let result = {
            "title": $(`#content > div.wrapper > div.postbody > div > div.listupd > div:nth-child(${ab}) > div > a > div.bigor > div.tt`).text().replace('\n', ''),
            "score": $(`#content > div.wrapper > div.postbody > div > div.listupd > div:nth-child(${ab}) > div > a > div.bigor > div.adds > div.rt > div > div.numscore`).text(),
            "last_capter": $(`#content > div.wrapper > div.postbody > div > div.listupd > div:nth-child(${ab}) > div > a > div.bigor > div.adds > div.epxs`).text(),
            "url": $(`#content > div.wrapper > div.postbody > div > div.listupd > div:nth-child(2) > div > a`).attr("href"),
            "thumb": $(`#content > div.wrapper > div.postbody > div > div.listupd > div:nth-child(${ab}) > div > a > div.limit > img`).attr("src")
            
        }
    thumbnail.push(result)
    }
    resolve(thumbnail)
})
    
})
}

module.exports = { kiryu };