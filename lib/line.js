const axios = require("axios");
const cheerio = require("cheerio");

function slineMetadata(id) {
     return new Promise((resolve, reject) => {
          axios.get(`http://dl.stickershop.line.naver.jp/products/0/0/1/${id}/android/productInfo.meta`)
               .then(({ data }) => {
                    const id = data.packageId
                    const title = data.title.en
                    const author = data.author.en
                    const ani = data.hasAnimation
                    let stickers = []
                    data.stickers.forEach((rest) => {
                         stickers.push(rest)
                    })
                    resolve({
                         id: id,
                         title: title,
                         animate: ani,
                         author: author,
                         stickers: stickers
                    })
               }).catch(reject)
     })
}

function getStikerLine(url) {
     return new Promise((resolve, reject) => {
          const id = url.match(/[0-9]/g).join('')
          slineMetadata(id)
               .then(async (a) => {
                    const id = a.id
                    const author = a.author
                    const title = a.title
                    const stiker = a.stickers
                    let urls = []
                    if (a.animate) {
                         for (let i = 0; i < stiker.length; i++) {
                              urls.push(`https://sdl-stickershop.line.naver.jp/products/0/0/1/${id}/android/animation/${stiker[0].id}.png`)
                         }
                    } else if (!a.animate) {
                         for (let i = 0; i < stiker.length; i++) {
                              urls.push(`http://dl.stickershop.line.naver.jp/stickershop/v1/sticker/${stiker[0].id}/android/sticker.png`)
                         }
                    }
                    resolve({
                         status: true,
                         message: "Created By bg hanip",
                         result: {
                              author: author,
                              id: id,
                              title: title,
                              animated: a.animate,
                              stickers: urls
                         }
                    })
               }).catch(reject)
     })
}

module.exports = { getStikerLine };