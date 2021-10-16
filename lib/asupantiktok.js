const axios = require("axios");
const cheerio = require("cheerio");

const asupantiktok = async(query) => {
	        return new Promise(async(resolve,reject) => {
                axios.get(`https://urlebird.com/user/${query}/`)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const link = [];
                        $('#thumbs > div > a').each(function(a,b) {
                        	link.push($(b).attr('href'))
                        })
                        rand = link[Math.floor(Math.random() * link.length)]
                        axios.get(rand)
                        .then(({ data }) => {
                        	const $$ = cheerio.load(data)
                        	const format = {
                        		creator : 'Fajar Ihsana',
                        		username : $$('body > div.main > div > div > div:nth-child(1) > div:nth-child(1) > div > div.video_html5 > div.container-fluid.ml-2.pt-1.pb-2 > div > div.col-auto.text-left.pl-2 > h2 > a').text().split('@')[1],
                        		followers : $$('body > div.main > div > div > div:nth-child(1) > div:nth-child(1) > div > div.video_html5 > div.container-fluid.ml-2.pt-1.pb-2 > div > div.col-auto.text-left.pl-2').text().split('\n')[3],
                        		media : {
                        			caption : $$('body > div.main > div > div > div:nth-child(1) > div:nth-child(1) > div > div.info2').text().replace(/\n/g, ''),
                        			likes : $$('body > div.main > div > div > div:nth-child(1) > div:nth-child(1) > div > div.info > span:nth-child(1)').text().split('💗 ')[1],
                        			comments : $$('body > div.main > div > div > div:nth-child(1) > div:nth-child(1) > div > div.info > span:nth-child(2)').text().split('📑 ')[1],
                        			share : $$('body > div.main > div > div > div:nth-child(1) > div:nth-child(1) > div > div.info > span:nth-child(3)').text().split('↪️ ')[1],
                        			videourl : $$('body > div.main > div > div > div:nth-child(1) > div:nth-child(1) > div > div.video_html5 > video').attr('src') 
                        		}
                        	}
                  resolve(format)
			})
        })
                .catch(reject)
            })
}

module.exports = { asupantiktok }