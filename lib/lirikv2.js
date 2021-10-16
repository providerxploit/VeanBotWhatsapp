const { default:Axios } = require("axios");
const cheerio = require('cheerio');

function getUrl(query){
    return new Promise((resolve, reject) => {
        Axios.get(`https://www.musixmatch.com/search/${query}`)
        .then(({data}) => {
            const $ = cheerio.load(data)
            const res = $('#site').find('div > div > div > div > ul > li:nth-child(1) > div > div > div')
            //resolve($('#site').find('search-results > div > div > tab-content > div > div > box box-style-plain > box-content > ul'))
            resolve(`https://www.musixmatch.com` + $(res).find('h2 > a').attr('href'))
        })
        .catch(reject)
    })
}
function getLirik(query) {
    return new Promise(async(resolve, reject) => {
        const link = await getUrl(query)
        Axios.get(link)
        .then(({data}) => {
            const $ = cheerio.load(data)
            let lirik = $('#site').find('.mxm-lyrics__content > .lyrics__content__ok').text()
            let judul = $('div.mxm-track-title > h1').text().replace(/Lyrics/gi, '')
            let author = $('div.mxm-track-title > h2').text()
            let thumb = 'https:'+$('div.banner-album-image-desktop > img').attr('src')
            resolve({
                code: 200,
                cretor: 'aqulzz',
                result: {
                    judul,
                    author,
                    thumb,
                    lirik,
                }
            })
        })
        .catch(reject)
    })
}

//getLirik('Surat cinta untuk starla')
//.then(console.log)
//.catch(console.log)

module.exports.getLirik = getLirik
