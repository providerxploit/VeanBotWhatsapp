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
name = $(d).text();
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

module.exports = { sfilesearch }