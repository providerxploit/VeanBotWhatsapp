const axios = require('axios')
const cheerio = require('cheerio')


const sfilesearch = (query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://sfile.mobi/search.php?q=' + query + '&search=Search')
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const result = [];
const link = [];
const neme = [];
                        $('div.w3-card.white > div.list > a').each(function(a,b) {
                                link.push($(b).attr('href'))
})
$('div.w3-card.white > div.list > a').each(function(c,d) {
let name = $(d).text();
neme.push(name)
})
for(let i=0; i<link.length; i++){
 result.push({
nama: neme[i],
link: link[i]
})
}
console.log(neme)
                  resolve(result)
                })
                .catch(reject)
        })
}
const sfiledl = (link) => {	
        return new Promise((resolve,reject) => {
                axios.get(link)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const nama = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(2) > b').text();
                        const size = $('#download').text().split('Download File')
                        const desc = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(7) > center > h1').text();
                        const type = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(4) > a:nth-child(3)').text();
                        const upload = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(5)').text();
                        const uploader = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(4) > a:nth-child(2)').text();
                        const download = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(6)').text();
                        const link = $('#download').attr('href')
                        const format = {
                          judul: nama,
                          size: size[1].split('(')[1].split(')')[0],
                          type: type,
                          desc: desc,
                          uploader: uploader,
                          uploaded: upload.split('\n - Uploaded: ')[1],
                          download_count : download.split(' - Downloads: ')[1],
                          link: link
                        }
                        const result = {
                        creator : 'Hanya Orang Biasa',
                        data : format
                       }
                  resolve(result)
                })
                .catch(reject)
        })
}

exports.sfilesearch = sfilesearch;
exports.sfiledl = sfiledl;