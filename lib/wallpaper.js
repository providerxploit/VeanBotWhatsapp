const cheerio = require('cheerio')
const axios = require('axios')
function wallpaper(mc){
	return new Promise(async(resolve, reject) => {
		axios.get('https://wallpapercave.com/search?q=' + mc)
		.then(({ data }) => {
		const $ = cheerio.load(data)
		const image = [];
		const image2 = [];
		const link = 'https://wallpapercave.com'
		$('#popular > a').each(function(a,b) {
			image.push(link + $(b).attr('href')) })
		const random = image[Math.floor(Math.random() * image.length)]
		axios.get(random).then(({ data }) => {
			const $$ = cheerio.load(data)
			const link2 = 'https://wallpapercave.com'
			$$('div.wallpaper > a').each(function(c,d) {
			image2.push(link2 + $$(d).find('img').attr('src'))		
			})
			resolve(image2)
		})
		})
		.catch(reject)
	})
}

module.exports = { wallpaper }