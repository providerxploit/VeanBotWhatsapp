const axios = require('axios')
const cheerio = require('cheerio')


const apkmirror = async(query) => {
        return new Promise((resolve,reject) => {
                axios.get('https://www.apkmirror.com/?post_type=app_release&searchtype=apk&s=' + query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const nama = [];
                        const developer = [];
                        const lupdate = [];
                        const size = [];
                        const down = [];
                        const version = [];
                        const link = [];
                        const format = [];
                        $('#content > div > div > div.appRow > div > div > div > h5 > a').each(function(a,b) {
                          nem = $(b).text();
                          nama.push(nem)
                        })
                        $('#content > div > div > div.appRow > div > div > div > a').each(function(c,d) {
                          dev = $(d).text();
                          developer.push(dev)
                        })
                        $('#content > div > div > div.appRow > div > div > div > div.downloadIconPositioning > a').each(function(e,f) {
                          link.push('https://www.apkmirror.com' + $(f).attr('href'))
                        })
                        $('#content > div > div > div.infoSlide > p > span.infoslide-value').each(function(g,h) {
                          data = $(h).text();
                          if(data.match('MB')){
                          size.push(data)
                          }
                          else if(data.match('UTC')){
                            lupdate.push(data)
                          }
                          else if(!isNaN(data) || data.match(',')){
                            down.push(data)
                          }
                          else{
                            version.push(data)
                          }
                        })
                        for(let i=0; i<link.length; i++){
                          format.push({
                            judul : nama[i],
                            dev : developer[i],
                            size : size[i],
                            version : version[i],
                            uploaded_on : lupdate[i],
                            download_count : down[i],
                            link : link[i]
                          })
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

module.exports = { apkmirror }