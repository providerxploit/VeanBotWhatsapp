const cheerio = require('cheerio')
const axios = require('axios')
function wallpaperhd(chara){
	return new Promise((resolve,reject) => {
		axios.get('https://wall.alphacoders.com/search.php?search=' + chara + '&filter=4K+Ultra+HD')
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const result = [];
			$('div.boxgrid > a > picture').each(function(a,b) {
				result.push($(b).find('img').attr('src').replace('thumbbig-',''))	
			})
		  resolve(result)
		})
		.catch(reject)
	})
}

module.exports = { wallpaperhd }