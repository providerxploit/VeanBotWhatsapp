const cheerio = require("cheerio");
const fetch = require('node-fetch')

function kusonime(query) {
  return new Promise((resolve, reject) => {
    fetch('https://kusonime.com/?s=' + query + '&post_type=anime', {
      method: 'GET',
      headers: {
        'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
      }
    })
    .then(rsp => rsp.text())
    .then((data) => {
      const $ = cheerio.load(data)
      const url = []
      $('div > div > ul > div > div > div').each(function() {
        url.push($(this).find('a').attr('href'))
      })
      const randomUrl = url[Math.floor(Math.random() * url.length)]
      fetch(randomUrl, {
        method: 'GET',
        headers: {
          'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
        }
      })
      .then(rsp => rsp.text())
      .then((data) => {
        const $$ = cheerio.load(data)
        resolve({
          status: true,
          message: 'By DappaUhuy',
          result: {
            title: $$('.vezone > .venser').find('.jdlz').text(),
            thumb: $$('.vezone > .venser').find('div > img').attr('src'),
            views: $$('.vezone > .venser').find('div > div > span').text().trim().replace(' Views', ''),
            genre: $$('.vezone > .venser').find('.lexot > .info > p').eq(1).text().replace('Genre : ', ''),
            seasons: $$('.vezone > .venser').find('.lexot > .info > p').eq(2).text().replace('Seasons : ', ''),
            producers: $$('.vezone > .venser').find('.lexot > .info > p').eq(3).text().replace('Producers: ', ''),
            type: $$('.vezone > .venser').find('.lexot > .info > p').eq(4).text().replace('Type: ', ''),
            status: $$('.vezone > .venser').find('.lexot > .info > p').eq(5).text().replace('Status: ', ''),
            rating: $$('.vezone > .venser').find('.lexot > .info > p').eq(7).text().replace('Score: ', ''),
            duration: $$('.vezone > .venser').find('.lexot > .info > p').eq(8).text().replace('Duration: ', ''),
            release: $$('.vezone > .venser').find('.lexot > .info > p').eq(9).text().replace('Released on: ', ''),
            desc: $$('.vezone > .venser').find('p').eq(10).text(),
            url: randomUrl
          }
        })
      })
      .catch(reject)
    })
    .catch(reject)
  })
}

module.exports = { kusonime };