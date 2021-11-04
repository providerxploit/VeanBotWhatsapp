const axios = require('axios')
const cheerio = require('cheerio')

chord = async(query) => {
  return new Promise((resolve, reject) => {
    axios.get('https://www.gitagram.com/chord-gitar/depan?do=search&q=' + query)
    .then(({data}) => {
      const $$ = cheerio.load(data)
      plink = $$('#dokuwiki__content > div.typo.position-relative > div.search_fulltextresult > dl > div:nth-child(1) > dt > a').attr('href')
      if(plink == undefined) return resolve('Chord tidak ditemukan!')
      axios.get(plink)
      .then(({data}) => {
        const $ = cheerio.load(data)
        chords = $('#dokuwiki__content').find('h3.sectionedit1').text()
        $('#dokuwiki__content').each(function(a, b){
          chords += $(b).find('div.song-with-chords').text().replace(/#/g, '')
        })
      resolve({
source: plink,
chord:chords})
    })
    })
  })
}

module.exports = { chord }